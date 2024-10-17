import Image from 'next/image';
import Link from 'next/link';

export default function ResumePage() {
  return (
    <section id="courses" className="min-h-full snap-start">
      <Link href="#courses">
        <h1 className="mb-8 pt-4 text-left text-6xl font-bold hover:text-gray-500 2xl:text-7xl">
          Formação Complementar
        </h1>
      </Link>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex items-center space-x-4 rounded-lg border p-4">
          <Image
            src="/images/alura-logo.jpg"
            alt="Course Logo"
            width={60}
            height={60}
            className="rounded-lg"
          />
          <div className="text-left">
            <p className="text-xl font-semibold">React Development</p>
            <p className="text-lg">
              Advanced course on modern React development.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4 rounded-lg border p-4">
          <Image
            src="/images/alura-logo.jpg"
            alt="Course Logo"
            width={60}
            height={60}
            className="rounded-lg"
          />
          <div className="text-left">
            <p className="text-xl font-semibold">Node.js & Express</p>
            <p className="text-lg">
              Mastering backend development with Node.js and Express.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4 rounded-lg border p-4">
          <Image
            src="/images/alura-logo.jpg"
            alt="Course Logo"
            width={60}
            height={60}
            className="rounded-lg"
          />
          <div className="text-left">
            <p className="text-xl font-semibold">Database Design</p>
            <p className="text-lg">
              In-depth course on database management and design principles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
