import Link from 'next/link';
export default function Summary() {
  return (
    <section id="about" className="min-h-full snap-start">
      <Link href="#summary">
        <h1 className="mb-8 pt-4 text-left text-6xl font-bold hover:text-gray-500 2xl:pt-16 2xl:text-7xl">
          Resumo
        </h1>
      </Link>

      <div className="animate-fadeIn text-justify text-2xl leading-relaxed text-gray-300 2xl:text-3xl">
        <p className="mb-4 md:text-left">
          Sou um Engenheiro Full-Stack com experiência de 4+ anos no
          desenvolvimento de software na{' '}
          <Link
            href="https://quantumfinance.com.br/"
            target="_blank"
            className="font-semibold text-gray-100 hover:text-gray-500"
          >
            Quantum
          </Link>
          , com enfoque em soluções orientadas a dados do mercado financeiro.
          Minha expertise abrange uma variedade de tecnologias, frameworks e
          metodologias essenciais para o desenvolvimento backend e engenharia de
          dados.
        </p>
        <p className="md:text-left">
          Tenho trabalhado constantemente para aprimorar minhas competências por
          meio de projetos próprios e cursos especializados em Desenvolvimento
          Web e DevOps. Estou motivado para colaborar em projetos que me
          desafiem e proporcionem um ambiente de crescimento contínuo. Gosto de
          ambientes de trabalho dinâmicos e colaborativos, onde a troca de
          ideias e a inovação fazem parte do dia a dia.
        </p>
      </div>
    </section>
  );
}
