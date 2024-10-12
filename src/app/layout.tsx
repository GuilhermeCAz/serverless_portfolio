import type { Metadata } from 'next';
import '@/app/globals.css';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';

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
