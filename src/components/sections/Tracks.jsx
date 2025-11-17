import lamp from "../../assets/images/tracks/lamp.svg";
import arrow from "../../assets/images/tracks/arrow.svg";
import CourseCard from "../common/CourseCard";
import { courses } from "../../data/courses";

function Tracks() {
  return (
    <section className="relative">
      <div className="container-3xl mt-16 mb-12 lg:mb-31.5">
        <header className="text-center mb-12 lg:mb-16">
          <h2 className="text-black text-5xl font-semibold font-jost capitalize leading-tight lg:leading-17.5 mb-2">
            Our Tracks
          </h2>
          <p className="text-zinc-500 text-base lg:text-xl font-medium font-poppins">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5">
          {courses.map((course) => (
            <CourseCard key={course.id || course.title} {...course} />
          ))}
        </div>
      </div>
      <img
        src={lamp}
        alt=""
        className="absolute left-20 -top-4 hidden 2xl:flex"
        aria-hidden="true"
      />
      <img
        src={arrow}
        alt=""
        className="absolute right-4 -top-14 hidden 2xl:flex"
        aria-hidden="true"
      />
    </section>
  );
}

export default Tracks;
