import Image from 'next/image';
import {
  SiRoadmapdotsh,
  SiGithub,
  SiLinkedin,
  SiGmail,
  SiWhatsapp,
} from 'react-icons/si';
// import { HiOutlineDocumentArrowDown } from 'react-icons/hi2';

export default function HomePage() {
  return (
    <main className="animate-fadeIn flex flex-grow justify-center">
      <div className="flex flex-col items-center p-6 lg:flex-row lg:space-x-12">
        <div className="flex flex-col items-center">
          <div className="overflow-hidden rounded-full">
            <Image
              src="/images/profile.jpg"
              alt="Profile Picture"
              width={192}
              height={192}
              priority
            />
          </div>
          <div className="mt-4 flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/guilherme-carvalho-de-azevedo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin size={28} />
            </a>
            <a
              href="https://github.com/GuilhermeCAz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub size={28} />
            </a>
            <a
              href="https://roadmap.sh/u/guilhermec"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiRoadmapdotsh size={28} />
            </a>
            <a href="mailto:guicarvalhoaz@gmail.com">
              <SiGmail size={28} />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5521997572875"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiWhatsapp size={28} />
            </a>
          </div>
          {/* <a
            href="/docs/Guilherme Azevedo - CV.pdf"
            className="mt-4 flex text-lg"
            download
          >
            <HiOutlineDocumentArrowDown size={28} />
            Resume
          </a> */}
        </div>

        <div className="animate-slideIn p-4 text-center lg:p-0 lg:text-left">
          <h1 className="mb-4 whitespace-nowrap text-3xl font-bold lg:text-6xl">
            Guilherme Azevedo
          </h1>
          <p className="whitespace-nowrap text-lg lg:text-2xl">
            Full-stack Developer | Back-end Specialist
          </p>
        </div>
      </div>
    </main>
  );
}
