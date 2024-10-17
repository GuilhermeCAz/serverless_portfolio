import Link from 'next/link';
export default function Summary() {
  return (
    <section id="about" className="min-h-full snap-start">
      <Link href="#summary">
        <h1 className="mb-8 pt-4 text-left text-6xl font-bold hover:text-gray-500 2xl:text-7xl">
          Resumo
        </h1>
      </Link>

      <div className="text-justify text-2xl leading-relaxed 2xl:text-3xl">
        <p className="mb-4">
          Engenheiro de Backend com sólida experiência no desenvolvimento e
          otimização de soluções orientadas a dados no setor financeiro.
          Graduado em Engenharia de Produção pela UERJ e com vários anos de
          experiência prática na Quantum, aprimorei minhas habilidades em
          desenvolvimento full-stack (com foco em back-end), análise de dados,
          automação e coordenação de equipes. Minha expertise abrange uma
          variedade de tecnologias, frameworks e metodologias essenciais para o
          desenvolvimento backend e engenharia de dados.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, facere
          voluptates qui, rem numquam aliquid maiores dolor sed doloremque
          necessitatibus aspernatur repellat voluptatem harum voluptatibus
          dolorum, nesciunt expedita doloribus omnis.
        </p>
      </div>
    </section>
  );
}
