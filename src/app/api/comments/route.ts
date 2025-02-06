

import { supabase } from '@/lib/supabaseClient';
// import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
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
  try {
    const { action, code, content, is_question, user_id } = await request.json();

    if (action === 'execute') {
      const result = await executeCode(code);
      return NextResponse.json(result);
    } else if (action === 'create-comment') {
      const { data, error } = await supabase
        .from('comments')
        .insert([{ content, is_question, user_id }]);

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json(data);
    } else {
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }
  } catch (error: unknown) {
    console.error(error); // Use the error variable here
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
  
}

// Function to execute code using Judge0 API
const executeCode = async (code: string) => {
  const response = await fetch('https://judge0-ce.p.rapidapi.com/submissions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': process.env.JUDGE0_API_KEY || '',
      'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
    },
    body: JSON.stringify({
      source_code: code,
      language_id: 54, // C++ language ID
      stdin: '', // Input (if any)
    }),
  });

  const data = await response.json();
  const token = data.token;

  // Poll for the result
  const result = await getSubmissionResult(token);
  return result;
};

// Function to poll for submission result
const getSubmissionResult = async (token: string) => {
  const url = `https://judge0-ce.p.rapidapi.com/submissions/${token}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.JUDGE0_API_KEY || '',
      'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
    },
  };

  let result;
  do {
    const response = await fetch(url, options);
    result = await response.json();
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second
  } while (result.status?.id === 1 || result.status?.id === 2); // Status 1: In Queue, 2: Processing

  return result;
};
