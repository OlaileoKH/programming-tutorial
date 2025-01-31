import { supabase } from '@/lib/supabaseClient';
import { NextResponse } from 'next/server';

export async function GET() {
  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function POST(request: Request) {
    const { content, is_question, user_id, poll_options } = await request.json();
  
    const { data, error } = await supabase
      .from('comments')
      .insert([{ content, is_question, user_id, poll_options }]);
  
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  
    return NextResponse.json(data);
  }