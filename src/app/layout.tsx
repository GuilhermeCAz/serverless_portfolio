import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Guilherme Azevedo's Portfolio`,
  description:
    'A serverless portfolio website made with Next.js and Terraform.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex h-full flex-col">
        <header className="flex items-center justify-between bg-gray-100 p-4 dark:bg-gray-800">
          <nav className="flex space-x-4">
            <Link href="/">Início</Link>
            <Link href="/about">Sobre</Link>
            <Link href="/resume">Currículo</Link>
            <a href="/docs/Guilherme Azevedo - CV.pdf" download>
              Download
            </a>
          </nav>
        </header>
        {children}
        <footer className="text-nowrap bg-gray-100 p-4 text-right dark:bg-gray-800">
          Built with Next.js and Tailwind by Guilherme Azevedo.
        </footer>
      </body>
    </html>
  );
}
