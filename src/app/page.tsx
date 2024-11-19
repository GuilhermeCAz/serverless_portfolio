import Image from 'next/image';
import profilePicture from '@public/images/profile.jpg';

export default function HomePage() {
  return (
    <div className="flex h-full flex-col items-center justify-center p-6 md:flex-row md:space-x-12 xl:space-x-28 2xl:space-x-40">
      <Image
        src={profilePicture}
        alt="Profile Picture"
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
  );
}
