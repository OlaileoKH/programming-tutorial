
export default function Home() {
  return (
    <div className="w-full md:w-1/2 text-left space-y-6">
  <h1 className="text-5xl text-gradient text-blue-900 font-extrabold font-serif">Welcome to </h1>
  <h1 className="text-5xl text-gradient text-blue-900 font-extrabold font-serif">Programming Tutorials</h1>
  <br></br>
  <h3 className="text-lg text-blue-900 font-mono">Select a programming language to start learning:</h3>
  <ul className="list-disc font-color-black pl-5 mt-2">
    <li>
      <a href="/cpp" className="text-3xl font-bold text-orange-500 hover:text-black transition duration-300 ease-in-out block mb-6 font-serif"> C++ </a>
    </li>
    <li>
      <a href="/python" className="text-3xl font-bold text-green-500 hover:text-black transition duration-300 ease-in-out block mb-6 font-serif"> Python </a>
    </li>
  </ul>
</div>

  );
}