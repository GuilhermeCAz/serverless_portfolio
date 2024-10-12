import Link from 'next/link';
export default function Summary() {
  return (
    <section id="about" className="min-h-full snap-start">
      <Link href="#summary">
        <h1 className="mb-8 pt-4 text-left text-6xl font-bold hover:text-gray-500">
          Resumo
        </h1>
      </Link>

      <div className="text-justify text-2xl leading-relaxed">
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
          I am passionate about creating clean, efficient code and enjoy working
          on both personal and professional projects. My journey as a developer
          has taken me through various courses, certifications, and experiences
          that shaped my skills and approach to development.
        </p>
      </div>
    </section>
  );
}
