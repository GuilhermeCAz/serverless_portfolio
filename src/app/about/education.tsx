import Image from 'next/image';
import Link from 'next/link';
import universityLogo from '@public/images/university-logo.png';

export default function Education() {
  return (
    <section id="education" className="min-h-full snap-start">
      <Link href="#education">
        <h1 className="mb-8 pt-4 text-left text-6xl font-bold hover:text-gray-500 2xl:text-7xl">
          Formação
        </h1>
      </Link>

      <div className="flex flex-col items-center text-center md:flex-row md:items-stretch md:text-left">
        <Link
          href="http://www.uerj.br"
          target="_blank"
          className="mb-4 md:mb-0 md:mr-6 md:w-1/3"
        >
          <Image
            src={universityLogo}
            alt="UERJ Logo"
            className="aspect-square rounded-lg bg-gray-900 object-contain hover:opacity-75"
          />
        </Link>

        <div className="flex flex-1 flex-col">
          <h2 className="text-4xl font-bold text-white 2xl:text-5xl">
            Bacharelado em Engenharia de Produção
          </h2>

          <p className="text-md font-medium text-gray-400 md:text-xl">
            ago/2015 &ndash; dez/2021
          </p>

          <div className="mt-4 flex flex-grow flex-col justify-center gap-6 text-xl text-gray-300 md:mt-0 md:text-3xl 2xl:text-4xl">
            <p>
              📊 Coeficiente de Rendimento: 8.6 / 10, <i>cum laude</i>
            </p>

            <p>🏛️ Universidade do Estado do Rio de Janeiro (UERJ)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
