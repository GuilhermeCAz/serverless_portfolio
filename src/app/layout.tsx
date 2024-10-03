import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: `Guilherme Azevedo's Portfolio`,
  description: 'A serverless portfolio website made with Next.js.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex h-full flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
