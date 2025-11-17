import TeacherCard from "../common/TeacherCard";
import { teachers } from "../../data/teachers";

const BLUR_STYLES =
  "w-[960px] h-[778px] rounded-full bg-orange-500/10 blur-3xl opacity-70 -z-10";

function Teacher() {
  return (
    <section>
      <div className="relative container-3xl mt-6 mb-20">
        <div
          className={`absolute ${BLUR_STYLES} -left-200 -top-130`}
          aria-hidden="true"
        />
        <div
          className={`absolute ${BLUR_STYLES} -right-230 -top-80`}
          aria-hidden="true"
        />

        <header className="text-center">
          <h2 className="text-black text-5xl font-semibold font-jost capitalize leading-17.5 mb-2">
            Our Teacher
          </h2>
          <p className="text-zinc-500 text-xl font-medium mb-16 font-poppins">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id || teacher.name} {...teacher} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Teacher;
