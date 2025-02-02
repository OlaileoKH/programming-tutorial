'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Comment } from '@/types/comment';
import { User } from '@supabase/supabase-js';
import ExpandableSection from '@/components/ExpandableSection';
import { formatDistanceToNow } from 'date-fns';

export default function CommentSection() {
  const [comments, setComments] = useState<Record<string, Comment[]>>({});
  const [newComment, setNewComment] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [commentType, setCommentType] = useState<'authenticated' | 'guest'>('guest');
  const [guestName, setGuestName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');
  const [expandedReplies, setExpandedReplies] = useState<Record<string, boolean>>({});

  const fetchComments = async () => {
    const { data: commentsData, error } = await supabase
      .from('comments')
      .select(`
        id, content, guest_name, created_at, parent_id, user_id, 
        profiles (username)
      `)
      .order('created_at', { ascending: false });
  
    if (error) {
      console.error('Error fetching comments:', error.message);
      return;
    }
  
    // Ensure that `profiles` is a single object instead of an array
    const formattedComments = (commentsData || []).map((comment) => ({
      ...comment,
      profiles: Array.isArray(comment.profiles) ? comment.profiles[0] : comment.profiles,
    })) as Comment[];
  
    // Group comments into a dictionary
    const groupedComments: Record<string, Comment[]> = {};
  
    formattedComments.forEach((comment) => {
      if (comment.parent_id) {
        // This is a reply, group it under its parent comment
        if (!groupedComments[comment.parent_id]) {
          groupedComments[comment.parent_id] = [];
        }
        groupedComments[comment.parent_id].push(comment);
      } else {
        // This is a top-level comment, group it under its own ID
        if (!groupedComments[comment.id]) {
          groupedComments[comment.id] = [];
        }
        groupedComments[comment.id].unshift(comment);
      }
    });
  
    // Update the state with the grouped comments
    setComments(groupedComments);
  };

  const postComment = async () => {
    if (!newComment.trim()) {
      alert('Comment cannot be empty.');
      return;
    }
  
    if (commentType === 'guest' && !guestName.trim()) {
      alert('Please enter your name.');
      return;
    }
  
    if (commentType === 'authenticated' && !user) {
      alert('Please log in to comment.');
      return;
    }
  
    const commentData = {
      content: newComment,
      user_id: commentType === 'authenticated' ? user?.id : null,
      guest_name: commentType === 'guest' ? guestName : null,
    };
  
    const { error } = await supabase.from('comments').insert([commentData]);
  
    if (error) {
      console.error('Error posting comment:', error);
    } else {
      setNewComment('');
      setGuestName('');
      fetchComments();
    }
  };

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Login error:', error);
      alert('Login failed. Please check your email and password.');
    } else {
      setUser(data.user);
      setShowLoginForm(false);
      console.log('User logged in successfully:', data.user);
    }
  };

  const handleSignUp = async () => {
    if (!email.trim() || !password.trim() || !username.trim()) {
      alert('Please fill in all fields.');
      return;
    }
  
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });
  
    if (signUpError) {
      console.error('Sign-up error:', signUpError);
      alert(`Sign-up failed: ${signUpError.message}`);
      return;
    }
  
    if (!signUpData.user) {
      alert('Sign-up successful, but failed to get user details. Try logging in.');
      return;
    }
  
    // Ensure user is stored in profiles table
    const { error: profileError } = await supabase
      .from('profiles')
      .insert([{ id: signUpData.user.id, username }]);
  
    if (profileError) {
      console.error('Profile creation error:', profileError);
      alert('Failed to create profile. Please try again.');
      return;
    }
  
    console.log('User signed up and profile created successfully:', signUpData.user);
    alert('Sign-up successful! Please check your email to confirm your account.');
  };
   
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const handleReply = async (parentId: string) => {
    if (!replyContent.trim()) {
      alert('Reply cannot be empty.');
      return;
    }
  
    // Check if parent comment exists
    const { data: parentComment, error: parentError } = await supabase
      .from('comments')
      .select('id')
      .eq('id', parentId)
      .single();
  
    if (parentError || !parentComment) {
      alert('Error: Parent comment does not exist.');
      return;
    }
  
    // Insert reply
    const { error } = await supabase
      .from('comments')
      .insert([{ 
        content: replyContent, 
        user_id: user?.id || null, 
        guest_name: commentType === 'guest' ? guestName : null, 
        parent_id: parentId
      }]);
  
    if (error) {
      console.error('Error posting reply:', error);
      alert(`Error posting reply: ${error.message}`);
    } else {
      setReplyContent('');
      setReplyingTo(null);
      fetchComments();
    }
  };


const formatTimestamp = (timestamp?: string) => {
  if (!timestamp) return "Invalid date";

  const utcDate = new Date(timestamp); // Supabase stores timestamps in UTC
  if (isNaN(utcDate.getTime())) return "Invalid date";

  // Convert UTC to IST (UTC+5:30)
  const istDate = new Date(utcDate.getTime() + 5.5 * 60 * 60 * 1000);

  return formatDistanceToNow(istDate, { addSuffix: true }); // Example: "5 minutes ago"
};

  
  
  // const handleLike = async (commentId: string) => {
  //   const comment = comments[commentId]?.[0]; // Get the main comment
  //   if (!comment) return;

  //   const currentLikes = comment.likes || 0; // Default to 0 if `likes` is undefined
  //   const { error } = await supabase
  //     .from('comments')
  //     .update({ likes: currentLikes + 1 })
  //     .eq('id', commentId);

  //   if (error) {
  //     console.error('Error liking comment:', error);
  //   } else {
  //     fetchComments();
  //   }
  // };

  useEffect(() => {
    const fetchUser = async () => {
      const { data: user, error } = await supabase.auth.getUser();
      if (error) {
        console.error('Error fetching user:', error);
      } else {
        setUser(user.user);
      }
    };

    fetchUser();
    fetchComments();
  }, []);

  return (
  <div className="ml-12 mr-12">
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Community Discussion</h2>
      <div className="mb-4">
        <label className="block mb-2">
          <input
            type="radio"
            value="guest"
            checked={commentType === 'guest'}
            onChange={() => setCommentType('guest')}
            className="mr-2"
          />
          Comment as Guest
        </label>
        <label className="block mb-2">
          <input
            type="radio"
            value="authenticated"
            checked={commentType === 'authenticated'}
            onChange={() => setCommentType('authenticated')}
            className="mr-2"
          />
          Comment as Authenticated User
        </label>
      </div>

      {commentType === 'guest' && (
        <input
          type="text"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          placeholder="Your name"
          className="w-full p-2 border rounded mb-4"
        />
      )}

      {commentType === 'authenticated' && !user && (
        <div className="mb-4">
          <button
            onClick={() => setShowLoginForm(!showLoginForm)}
            className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
          >
            {showLoginForm ? 'Hide Login Form' : 'Log In / Sign Up'}
          </button>

          {showLoginForm && (
            <div>
              <div className="mb-4">
                <button
                  onClick={() => setIsSignUp(false)}
                  className={`px-4 py-2 rounded-l ${
                    !isSignUp ? 'bg-blue-600 text-white' : 'bg-gray-200'
                  }`}
                >
                  Log In
                </button>
                <button
                  onClick={() => setIsSignUp(true)}
                  className={`px-4 py-2 rounded-r ${
                    isSignUp ? 'bg-blue-600 text-white' : 'bg-gray-200'
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {isSignUp ? (
                <div className="bg-gray-100 p-4 rounded">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full p-2 border rounded mb-2"
                  />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full p-2 border rounded mb-2"
                  />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="w-full p-2 border rounded mb-4"
                  />
                  <button
                    onClick={handleSignUp}
                    className="bg-green-600 text-white px-4 py-2 rounded"
                  >
                    Sign Up
                  </button>
                </div>
              ) : (
                <div className="bg-gray-100 p-4 rounded">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full p-2 border rounded mb-2"
                  />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full p-2 border rounded mb-4"
                  />
                  <button
                    onClick={handleLogin}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    Log In
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {user && (
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded mb-4"
        >
          Log Out
        </button>
      )}

      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Ask a question or share your thoughts..."
        className="w-full p-2 border rounded mb-4"
      />
      <button
        onClick={postComment}
        className={`bg-blue-600 text-white px-4 py-2 rounded ${
          (commentType === 'authenticated' && !user) ||
          (commentType === 'guest' && !guestName.trim())
            ? 'opacity-50 cursor-not-allowed'
            : ''
        }`}
        disabled={
          (commentType === 'authenticated' && !user) ||
          (commentType === 'guest' && !guestName.trim())
        }
      >
        Post
      </button>
      
      <ExpandableSection title="Comments">
        {/* Updated Comment Rendering Logic */}
      <div className="mt-6 ml-12 space-y-4">
        {Object.entries(comments).map(([commentId, commentList]) => (
          <div key={commentId} className="border p-4 rounded">
            {commentList.map((comment, index) => (
              <div key={index}>
                <p>{comment.content}</p>
                <p className="text-sm text-gray-500">
                  Posted by {comment.profiles?.username || comment.guest_name || 'Guest'} {' '}
                  {formatTimestamp(comment.created_at)}
                </p>


                <button
                  onClick={() => setReplyingTo(comment.id)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Reply
                </button>

                {replyingTo === comment.id && (
                  <div className="mt-2">
                    <textarea
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      placeholder="Write a reply..."
                      className="w-full p-2 border rounded mb-2"
                    />
                    <button
                      onClick={() => handleReply(comment.id)}
                      className="bg-blue-600 text-white px-4 py-2 rounded"
                    >
                      Post Reply
                    </button>
                  </div>
                )}

          {/* Expandable Replies */}
          {comments[comment.id]?.length > 0 && (
            <div className="mt-2 ml-6">
              <button
                onClick={() =>
                  setExpandedReplies((prev) => ({
                    ...prev,
                    [comment.id]: !prev[comment.id],
                  }))
                }
                className="text-gray-600 text-sm"
              >
                {expandedReplies[comment.id] ? 'Hide Replies' : 'View Replies'}
              </button>

              {expandedReplies[comment.id] && (
                <div className="ml-4 mt-2 border-l-2 pl-2 space-y-2">
                  {comments[comment.id].map((reply) => (
                    <div key={reply.id} className="p-2 border rounded">
                      <p>{reply.content}</p>
                      <p className="text-sm text-gray-500">
                        Replied by {reply.profiles?.username || reply.guest_name || 'Guest'} on{' '}
                        {formatTimestamp(comment.created_at)}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  ))}
</div>
      </ExpandableSection>
      </div>
    </div>
  );
}