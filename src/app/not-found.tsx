import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="text-nowrap pb-4 text-center text-5xl font-bold lg:text-6xl 2xl:text-8xl">
        404 | Page not found
      </h1>

      <p className="text-xl 2xl:text-2xl">
        Sorry, the page you are looking for could not be found.
      </p>

      <p className="text-xl 2xl:text-2xl">
        Please check your URL and try again.
      </p>

      <p className="pt-4 text-3xl font-bold hover:text-gray-500 hover:underline 2xl:text-4xl">
        <Link href="/">Go back to home</Link>
      </p>
    </div>
  );
}
