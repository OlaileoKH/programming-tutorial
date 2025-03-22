
export default function Home() {
  return (
    <div className="justify-center items-center mx-auto transform transition-all duration-500 hover:scale-105  w-full md:w-1/2 text-left space-y-6 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-2xl   ">
      <div className=" text-5xl text-gradient bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent font-extrabold font-serif animate-fade-in">
      <h1>Welcome to</h1>
      <h1 >Programming Tutorials</h1>
     </div> 
     <br />
      <h3 className="text-lg text-blue-900 font-mono animate-fade-in-delay">
        Select a programming language to start learning:
      </h3>
      <ul className="list-none pl-0 mt-2 space-y-4">
        <li className="ml-24">
          <a href="/cpp"
            className="text-3xl font-bold text-orange-500 hover:text-black transition-all duration-300 ease-in-out block mb-6 font-serif transform hover:translate-x-4 hover:scale-110">
            C++
          </a>
        </li>
        <li className="ml-20">
          <a href="/python"
            className="text-3xl font-bold text-green-500 hover:text-black transition-all duration-300 ease-in-out block mb-6 font-serif transform hover:translate-x-4 hover:scale-110"
          >
            Python
          </a>
        </li>
      </ul>
    </div>
  );
}