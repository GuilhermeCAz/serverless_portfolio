import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="flex flex-grow animate-fadeIn justify-center">
      <div className="flex flex-col items-center p-6 md:flex-row md:space-x-12 xl:space-x-28 2xl:space-x-40">
        <Image
          src="/images/profile.jpg"
          alt="Profile Picture"
          width={2669}
          height={2669}
          priority
          className="pointer-events-none w-40 overflow-hidden rounded-full xl:w-64 2xl:w-80"
        />
        <div className="animate-slideIn p-4 text-center md:p-0">
          <h1 className="mb-4 whitespace-nowrap text-5xl lg:text-7xl 2xl:text-8xl">
            Guilherme Azevedo
          </h1>
          <p className="whitespace-nowrap text-xl lg:text-2xl 2xl:text-3xl">
            Full-stack Developer | Back-end Specialist
          </p>
        </div>
      </div>
    </main>
  );
}
