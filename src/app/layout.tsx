import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AuthProvider } from '@/app/context/AuthContext';
import '@/app/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const title = 'Programming with Olaileo'; // Default title

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/OK.ico" />
        <title>{title}</title>
      </head>
      <body>
        <Header title={title} />
        <br />
        <AuthProvider><main className="pt-20 p-4">{children}</main></AuthProvider>
        <br />
        <br />
        <Footer />
      </body>
    </html>
  );
}