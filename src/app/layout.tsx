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
    <html lang="en">
      <body className="flex h-screen flex-col">
        <Header />
        <main className="flex-grow snap-y snap-mandatory overflow-y-auto overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
