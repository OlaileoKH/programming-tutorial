export interface Comment {
    guest_name: string;
    id: string;
    content: string;
    user_id: string;
    created_at: string;
    is_question?: boolean;
    poll_options?: string[];
    poll_votes?: Record<string, number>;
    user:string;
    username:string;
  }