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
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      const result = await response.json();

      if (result.error) {
        // Handle API errors
        setOutput(`Error: ${result.error}`);
      } else {
        // Display the output or error messages
        const outputMessage = result.output || result.error || 'No output';
        setOutput(outputMessage);
      }
    } catch (error) {
      // Handle network or unexpected errors
      setOutput(`Failed to execute code: ${error instanceof Error ? error.message : 'Unknown error'}`);
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