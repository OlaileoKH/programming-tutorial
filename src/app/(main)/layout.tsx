// import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/app/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {const title = 'Programming with Olaileo'; // Default title
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/OK.ico" />

        <title>Programming with Olaileo</title></head>
      <body>
    <Header title={title}></Header>
    <br></br>
        <main className="pt-20 p-4">{children}</main>
        <br></br>
        <br></br>
    <Footer></Footer>
      </body>
    </html>
  );
}