import {
  SiGithub,
  SiLinkedin,
  SiGmail,
  SiWhatsapp,
  SiRoadmapdotsh,
} from 'react-icons/si';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="p-4">
      <div className="mx-auto flex flex-col items-center justify-between px-4 text-sm md:flex-row">
        <div className="flex space-x-7">
          <a
            href="https://www.linkedin.com/in/guilherme-carvalho-de-azevedo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125"
          >
            <SiLinkedin size={16} className="h-7 w-7 md:h-4 md:w-4" />
          </a>
          <a
            href="https://github.com/GuilhermeCAz/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125"
          >
            <SiGithub size={16} className="h-7 w-7 md:h-4 md:w-4" />
          </a>
          <a
            href="https://roadmap.sh/u/guilhermec"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125"
          >
            <SiRoadmapdotsh size={16} className="h-7 w-7 md:h-4 md:w-4" />
          </a>
          <a href="mailto:guicarvalhoaz@gmail.com" className="hover:scale-125">
            <SiGmail size={16} className="h-7 w-7 md:h-4 md:w-4" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5521997572875"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125"
          >
            <SiWhatsapp size={16} className="h-7 w-7 md:h-4 md:w-4" />
          </a>
        </div>
        <div className="p-4 text-center md:p-0 md:text-right">
          <p>&copy; {new Date().getFullYear()} Guilherme Azevedo</p>
          <p>
            Desenvolvido com{' '}
            <Link
              href="https://nextjs.org"
              target="_blank"
              className="font-semibold text-gray-200 hover:text-gray-500"
            >
              Next.js
            </Link>{' '}
            e{' '}
            <Link
              href="https://tailwindcss.com"
              target="_blank"
              className="font-semibold text-gray-200 hover:text-gray-500"
            >
              Tailwind CSS
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
