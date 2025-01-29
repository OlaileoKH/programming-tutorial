// import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import '@/app/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {const title = 'Programming with Olaileo'; // Default title
  return (
    <html lang="en">
      <head><title>Programming with Olaileo</title></head>
      <body>
    <Header title={title}></Header>
        <main className="pt-20 p-4">{children}</main>
      </body>
    </html>
  );
}