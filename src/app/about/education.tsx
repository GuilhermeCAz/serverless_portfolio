import Image from 'next/image';
import Link from 'next/link';
import Carousel from '@/app/components/carousel';
import universityLogo from '@public/images/university-logo.png';

export default function Education() {
  return (
    <section id="education" className="min-h-full snap-start">
      <Link href="#education">
        <h1 className="mb-8 pt-4 text-left text-6xl font-bold hover:text-gray-500">
          Formação
        </h1>
      </Link>

      <div className="flex flex-col rounded-lg border border-gray-500 md:flex-row">
        <Link href="http://www.uerj.br" target="_blank">
          <Image
            src={universityLogo}
            alt="UERJ Logo"
            className="aspect-square cursor-pointer rounded-t-lg bg-amber-100 object-contain opacity-90 md:rounded-s-lg"
          />
        </Link>

        <div className="flex w-full cursor-grab select-none p-10 text-center active:cursor-grabbing md:text-nowrap">
          <Carousel
            slides={[
              <p key="slide-1" className="text-md md:text-4xl">
                🎓 Bacharelado em Engenharia de Produção
              </p>,
              <p key="slide-2" className="text-md md:text-4xl">
                📅 Agosto de 2015 &ndash; Dezembro de 2021
              </p>,
              <p key="slide-3" className="text-md md:text-4xl">
                🏛️ Universidade do Estado do Rio de Janeiro | UERJ
              </p>,
              <p key="slide-4" className="text-md md:text-4xl">
                📊 Coeficiente de Rendimento: 8.6 / 10, <i>cum laude</i>
              </p>,
            ]}
          />
        </div>
      </div>
    </section>
  );
}
