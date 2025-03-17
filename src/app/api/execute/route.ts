

// import { supabase } from '@/lib/supabaseClient';
// import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
  const { code } = await request.json();

  try {
    const response = await axios.post('https://api.jdoodle.com/v1/execute', {
      clientId: process.env.JDOODLE_CLIENT_ID,
      clientSecret: process.env.JDOODLE_CLIENT_SECRET,
      script: code,
      language: 'cpp',
      versionIndex: '0', // C++ version
    });

    return NextResponse.json(response.data);
  } catch (error) {
    return (`Failed to execute code: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// export async function GET() {
//   const { data, error } = await supabase
//     .from('comments')
//     .select('*')
//     .order('created_at', { ascending: false });

//   if (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }

//   return NextResponse.json(data);
// }

// export async function POST(request: Request) {
//   try {
//     const { action, code, content, is_question, user_id } = await request.json();

//     if (action === 'execute') {
//       const result = await executeCode(code);
//       return NextResponse.json(result);
//     } else if (action === 'create-comment') {
//       const { data, error } = await supabase
//         .from('comments')
//         .insert([{ content, is_question, user_id }]);

//       if (error) {
//         return NextResponse.json({ error: error.message }, { status: 500 });
//       }

//       return NextResponse.json(data);
//     } else {
//       return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
//     }
//   } catch (error: unknown) {
//     console.error(error);
//     return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
//   }
// }

// // Function to execute code using Judge0 API
// const executeCode = async (code: string) => {
//   try {
//     const response = await fetch('https://judge0-ce.p.rapidapi.com/submissions', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'X-RapidAPI-Key': process.env.JUDGE0_API_KEY || '',
//         'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
//       },
//       body: JSON.stringify({
//         source_code: code,
//         language_id: 54, // C++ language ID
//         stdin: '', // Input (if any)
//       }),
//     });

//     if (!response.ok) {
//       throw new Error(`Failed to submit code: ${response.statusText}`);
//     }

//     const data = await response.json();
//     if (!data.token) {
//       throw new Error('Failed to retrieve submission token');
//     }

//     // Poll for the result
//     const result = await getSubmissionResult(data.token);
//     return {
//       stdout: result.stdout,
//       stderr: result.stderr,
//       compile_output: result.compile_output,
//       status: result.status?.description || 'Unknown',
//     };
//   } catch (error) {
//     console.error('Error executing code:', error);
//     throw new Error('Failed to execute code');
//   }
// };

// // Function to poll for submission result
// const getSubmissionResult = async (token: string) => {
//   const url = `https://judge0-ce.p.rapidapi.com/submissions/${token}`;
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': process.env.JUDGE0_API_KEY || '',
//       'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
//     },
//   };

//   let result;
//   let retries = 0;
//   const maxRetries = 10; // Maximum number of retries

//   do {
//     const response = await fetch(url, options);
//     if (!response.ok) {
//       throw new Error(`Failed to fetch submission result: ${response.statusText}`);
//     }

//     result = await response.json();
//     retries++;

//     if (result.status?.id === 1 || result.status?.id === 2) {
//       await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second
//     }
//   } while ((result.status?.id === 1 || result.status?.id === 2) && retries < maxRetries);

//   if (retries >= maxRetries) {
//     throw new Error('Submission result polling timed out');
//   }

//   return result;
// };
