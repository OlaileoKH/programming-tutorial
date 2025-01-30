'use client'; // Add this directive at the top
// components/CodeBlock.tsx
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeBlockProps {
  code: string;
  language: 'python' | 'cpp' | 'javascript';
}

const CodeBlock = ({ code, language }: CodeBlockProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative group my-4">
      <div className="absolute right-2 top-2">
        <button
          onClick={copyToClipboard}
          className="bg-gray-700 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-600 transition-colors"
        >
          {isCopied ? '✓ Copied!' : 'Copy'}
        </button>
      </div>
      
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          padding: '1.5rem',
          borderRadius: '0.5rem',
          margin: 0
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;

