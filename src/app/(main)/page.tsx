
export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome to Programming Tutorials</h1>
      <p>Select a programming language to start learning:</p>
      <ul className="list-disc pl-5 mt-2">
        <li>
          <a href="/cpp" className="text-blue-600 hover:underline">
            C++
          </a>
        </li>
        <li>
          <a href="/python" className="text-blue-600 hover:underline">
            Python
          </a>
        </li>
      </ul>
    </div>
  );
}