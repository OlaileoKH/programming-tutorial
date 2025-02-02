export interface Comment {
  length: number;
  id: string;
  content: string;
  guest_name?: string;
  created_at: string;
  parent_id?: string | null;
  user_id?: string | null;
  profiles?: { username?: string | null } | null; // Ensure profiles is nullable
   

    is_question?: boolean;
    poll_options?: string[];
    poll_votes?: Record<string, number>;
    user:string;
    username:string;

  }