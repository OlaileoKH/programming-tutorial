import Link from 'next/link';

export default function Header({ title }: { title: string }) {
  return (
    <header className="bg-blue-600 text-white p-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-blue-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/cpp" className="hover:text-blue-200">
                C++
              </Link>
            </li>
            <li>
              <Link href="/python" className="hover:text-blue-200">
                Python
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}