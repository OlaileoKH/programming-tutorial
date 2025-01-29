import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white hover:text-blue-200">
            Home
          </Link>
        </li>
        <li>
          <Link href="/cpp" className="text-white hover:text-blue-200">
            C++
          </Link>
        </li>
        <li>
          <Link href="/python" className="text-white hover:text-blue-200">
            Python
          </Link>
        </li>
      </ul>
    </nav>
  );
}