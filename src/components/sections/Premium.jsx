import woman from "../../assets/images/premium/woman.svg";
import hearts from "../../assets/images/premium/hearts.svg";
import jigsaw from "../../assets/images/premium/jigsaw.svg";
import FeatureCard from "../common/FeatureCard";

const features = [
  {
    id: 1,
    icon: hearts,
    iconAlt: "Hearts icon",
    title: "Easily Accessible",
    description: "Learning will feel very comfortable with Courslab.",
  },
  {
    id: 2,
    icon: jigsaw,
    iconAlt: "Jigsaw puzzle icon",
    title: "Fun Learning Experience",
    description: "Learning will feel very comfortable with Courslab.",
  },
];


function Premium() {
  return (
    <section className="bg-orange-50">
      <div className="container-3xl flex flex-col-reverse lg:flex-row items-center gap-4 lg:gap-36.5">

        <div className="pl-7 -mb-8 lg:-mb-42 relative z-10">
          <img
            src={woman}
            alt="Woman enjoying premium learning experience"
            className="w-full max-w-md lg:max-w-none"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col items-center lg:items-start py-12 lg:py-20">
          <h2 className="text-slate-900 text-5xl lg:text-7xl font-bold lg:font-extrabold leading-16 lg:leading-23.5 text-center lg:text-start mb-11.5">
            Premium <span className="text-orange-500">Learning</span> Experience
          </h2>

          <div className="space-y-8.5">
            {features.map((feature) => (
              <FeatureCard key={feature.id} {...feature} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Premium;
