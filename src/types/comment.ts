export interface Comment {
  length: number;
  
   
    
    guest_name: string;
    id: string;
    content: string;
 
    created_at: string;
    is_question?: boolean;
    poll_options?: string[];
    poll_votes?: Record<string, number>;
    user:string;
    username:string;
      parent_id?: string | null;
      profiles?: { username: string } | null;

        
        
        user_id?: string | null;
        likes?: number;
  

      
    
  }