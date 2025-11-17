import { useState } from "react";
import circle_01 from "../../assets/images/subscribe/circle_01.svg";
import circle_02 from "../../assets/images/subscribe/circle_02.svg";
import circle_03 from "../../assets/images/subscribe/circle_03.svg";
import circle_04 from "../../assets/images/subscribe/circle_04.svg";
import arrow_orange from "../../assets/images/subscribe/arrow-orange.svg";
import lamp from "../../assets/images/subscribe/lamp.svg";

const DECORATIVE_CIRCLES = [
  { src: circle_01, className: "absolute left-4 top-0 hidden xl:flex" },
  { src: circle_02, className: "absolute left-0 top-0 hidden xl:flex" },
  { src: circle_03, className: "absolute right-0 top-0 hidden xl:flex" },
  { src: circle_04, className: "absolute right-0 top-0 hidden xl:flex" },
];

const BLUR_STYLES =
  "absolute w-[350px] h-[284px] rounded-full bg-orange-500/10 blur-3xl";

function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <section aria-labelledby="newsletter-heading">
      <div className="container-3xl pt-12 lg:pt-20 pb-18 lg:pb-32 px-4 lg:px-12">
        <div className="relative bg-primary-500 rounded-2xl flex flex-col items-center pt-14 lg:pt-23.5 pb-14 lg:pb-28 px-4">
          {DECORATIVE_CIRCLES.map((circle, index) => (
            <img
              key={index}
              src={circle.src}
              alt=""
              className={circle.className}
              aria-hidden="true"
            />
          ))}

          <h2
            id="newsletter-heading"
            className="text-white text-4xl font-semibold font-poppins leading-14 tracking-wide mb-3"
          >
            Subscribe to our newsletter
          </h2>
          <p className="text-white text-xl font-medium font-poppins mb-10">
            Lorem Ipsum is simply dummy text of the printing.
          </p>

          <form onSubmit={handleSubmit} className="w-full max-w-152.5">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <div className="relative">
              <input
                id="email-address"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="h-12 lg:h-20 w-full lg:max-w-152.5 rounded-full bg-white pl-4 lg:pl-10 pr-38 lg:pr-88 text-sm lg:text-xl font-medium text-blue-950 placeholder:text-zinc-400"
              />
              <button
                type="submit"
                className="absolute right-0.5 lg:right-2 top-1/2 -translate-y-1/2 rounded-full bg-orange-500 px-8 lg:px-18 py-2 lg:py-4.5 text-xl lg:text-2xl font-medium text-white transition-colors hover:bg-orange-400"
                disabled={!email}
              >
                Send
              </button>
            </div>
          </form>

          <img
            src={arrow_orange}
            alt=""
            className="absolute left-34 -bottom-8 hidden xl:flex"
            aria-hidden="true"
          />
          <img
            src={lamp}
            alt=""
            className="absolute right-39 bottom-10 hidden xl:flex"
            aria-hidden="true"
          />

          <div
            className={`${BLUR_STYLES} -left-14 -bottom-18 hidden xl:flex `}
            aria-hidden="true"
          />
          <div
            className={`${BLUR_STYLES} -right-30 -bottom-30 hidden xl:flex`}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
