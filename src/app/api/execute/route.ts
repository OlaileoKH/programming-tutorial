

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
      versionIndex: '0',
    });

    // Return the response data as JSON
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error executing code:', error);
    // Return an error response
    return NextResponse.json(
      { error: 'Failed to execute code' },
      { status: 500 }
    );
  }
}

