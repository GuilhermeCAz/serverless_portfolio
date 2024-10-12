import Summary from '@/app/about/summary';
import Education from '@/app/about/education';
import Courses from '@/app/about/courses';
import Hobbies from '@/app/about/hobbies';

export default function AboutPage() {
  return (
    <div className="h-full">
      <Summary />
      <Education />
      <Courses />
      <Hobbies />
    </div>
  );
}
