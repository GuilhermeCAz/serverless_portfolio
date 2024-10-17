import Summary from '@/app/about/summary';
import Education from '@/app/about/education';
import Courses from '@/app/about/courses';
import Hobbies from '@/app/about/hobbies';

export default function AboutPage() {
  return (
    <div className="h-full px-8 md:px-16 lg:px-32 2xl:px-96">
      <Summary />
      <Education />
      <Courses />
      <Hobbies />
    </div>
  );
}
