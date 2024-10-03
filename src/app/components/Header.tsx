'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { HiOutlineXMark, HiOutlineLanguage } from 'react-icons/hi2';
import { BR } from 'country-flag-icons/react/3x2';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative flex items-center justify-between p-3">
      {/* Navigation Links */}
      <nav className="flex w-full justify-between">
        <div className="hidden space-x-4 md:flex">
          <Link href="/" className="text-lg hover:text-gray-500">
            Início
          </Link>
          <Link href="/about" className="text-lg hover:text-gray-500">
            Sobre
          </Link>
          <Link href="/skills" className="text-lg hover:text-gray-500">
            Skills
          </Link>
        </div>
        <div className="hidden space-x-4 md:ml-auto md:flex">
          <Link
            href="/resume"
            className="rounded-lg bg-white px-3 py-0.5 text-lg text-black hover:bg-gray-800 focus:ring-1 focus:ring-gray-500 dark:bg-white dark:text-black dark:hover:text-white"
          >
            Currículo
          </Link>
        </div>
      </nav>

      {/* Hamburger Icon for Small Screens */}
      <button className="ml-auto block md:hidden" onClick={toggleMenu}>
        <HiOutlineMenuAlt3 size={24} />
      </button>

      {/* Side Menu for Small Screens */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-10 bg-gray-100 bg-opacity-75 md:hidden dark:bg-gray-900 dark:bg-opacity-75">
          <div className="absolute right-0 top-0 h-full w-3/4 bg-white p-4 dark:bg-black">
            <div className="mb-4 flex justify-end">
              <button onClick={toggleMenu}>
                <HiOutlineXMark size={24} />
              </button>
            </div>

            <nav className="ml-1 flex flex-col space-y-4">
              <Link
                href="/"
                onClick={toggleMenu}
                className="text-4xl hover:text-gray-500"
              >
                Início
              </Link>
              <Link
                href="/about"
                onClick={toggleMenu}
                className="text-4xl hover:text-gray-500"
              >
                Sobre
              </Link>
              <Link
                href="/skills"
                onClick={toggleMenu}
                className="text-4xl hover:text-gray-500"
              >
                Skills
              </Link>
              <Link
                href="/resume"
                onClick={toggleMenu}
                className="text-4xl hover:text-gray-500"
              >
                Currículo
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
