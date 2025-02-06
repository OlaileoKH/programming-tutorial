// components/CodeEditor.tsx
'use client';

import { useState } from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = () => {
  const [code, setCode] = useState<string>(`#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`);
  const [output, setOutput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRunCode = async () => {
    setIsLoading(true);
    setOutput('');

    try {
      const response = await fetch('/api/comments/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'execute', code }),
      });

      const result = await response.json();
      if (result.error) {
        setOutput(`Error: ${result.error}`);
      } else {
        setOutput(result.stdout || result.stderr || result.compile_output);
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      // setOutput('Failed to execute code. Please try again.');
      setOutput('Comming Soon........');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="h-[400px] border rounded-lg overflow-hidden mb-4">
        <Editor
          height="100%"
          defaultLanguage="cpp"
          defaultValue={code}
          theme="vs-dark"
          onChange={(value) => setCode(value || '')}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            scrollBeyondLastLine: false,
            automaticLayout: true,
          }}
        />
      </div>

      <button
        onClick={handleRunCode}
        disabled={isLoading}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
      >
        {isLoading ? 'Running...' : 'Run Code'}
      </button>

      {output && (
        <div className="mt-4 p-4 bg-gray-800 text-white rounded-lg">
          <h3 className="font-bold mb-2">Output:</h3>
          <pre className="whitespace-pre-wrap">{output}</pre>
        </div>
      )}
    </div>
  );
};

export default CodeEditor;