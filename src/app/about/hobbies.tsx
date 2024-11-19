import Link from 'next/link';

export default function ResumePage() {
  return (
    <section id="hobbies" className="min-h-full snap-start">
      <Link href="#hobbies">
        <h1 className="mb-8 pt-4 text-left text-6xl font-bold hover:text-gray-500 2xl:pt-16 2xl:text-7xl">
          Hobbies
        </h1>
      </Link>
      <p className="text-left text-2xl leading-relaxed 2xl:text-3xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed pariatur
        repellendus vitae, sequi reprehenderit voluptate ducimus quod
        laudantium, voluptatem ex facere architecto? Consequatur, architecto
        assumenda? Ea sed cum eius. Cumque!
      </p>
    </section>
  );
}
