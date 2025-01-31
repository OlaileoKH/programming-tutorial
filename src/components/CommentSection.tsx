'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Comment } from '@/types/comment';
import { User } from '@supabase/supabase-js';

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [commentType, setCommentType] = useState<'authenticated' | 'guest'>('guest');
  const [guestName, setGuestName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const fetchComments = async () => {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching comments:', error);
    } else {
      setComments(data || []);
    }
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
    if (!email.trim() || !password.trim()) {
      alert('Please enter your email and password.');
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error('Sign-up error:', error);
      alert(`Sign-up failed: ${error.message}`);
    } else {
      console.log('User signed up successfully:', data.user);
      alert('Sign-up successful! Please check your email to confirm your account.');
      setEmail('');
      setPassword('');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const refreshSession = async () => {
    const { data, error } = await supabase.auth.refreshSession();
    if (error) {
      console.error('Error refreshing session:', error);
    } else {
      setUser(data.user);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const { data: user, error } = await supabase.auth.getUser();
      if (error) {
        console.error('Error fetching user:', error);
        await refreshSession(); // Refresh the session if the user is not found
      } else {
        setUser(user.user);
      }
    };

    fetchUser();
    fetchComments();
  }, []);

  return (
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
      <div className="mt-6 space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="border p-4 rounded">
            <p>{comment.content}</p>
            <p className="text-sm text-gray-500">
              Posted by{' '}
              {comment.guest_name
                ? `Guest: ${comment.guest_name}`
                : `User: ${comment.user_id}`}{' '}
              on {new Date(comment.created_at).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}