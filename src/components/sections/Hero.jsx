import glass from "../../assets/images/hero/magnifying-glass.svg";
import ellipse from "../../assets/images/hero/ellipse.svg";
import object from "../../assets/images/hero/object.svg";
import { useState } from "react";

function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    console.log("Searching for:", searchQuery);
  }

  return (
    <section className="h-237 bg-orange-50 bg-hero">
      <div className="container-3xl flex flex-col lg:flex-row justify-between gap-2">
        <div className="mt-34 lg:mt-87 w-full lg:max-w-146 text-center lg:text-start">
          <header className="mb-12">
            <h1 className="mb-2 text-5xl lg:text-7xl font-bold lg:font-extrabold leading-16 lg:leading-23 text-slate-900 pr-1">
              The <span className="text-orange-500">Smart</span> Choice For{" "}
              <span className="text-orange-500">Future</span>
            </h1>
            <p className="text-lg lg:text-xl font-medium leading-7 lg:leading-9 text-zinc-500">
              Elearn is a global training provider based across the UK that
              specialises in accredited and bespoke training courses. We crush
              the...
            </p>
          </header>

          <form onSubmit={handleSubmit}>
            <label htmlFor="location-search" className="sr-only">
              Search for a location
            </label>
            <div className="relative max-w-xl mx-auto">
              <img
                src={glass}
                alt=""
                aria-hidden="true"
                className="absolute left-3 lg:left-6 top-1/2 h-5 w-5 lg:h-6 lg:w-6 -translate-y-1/2 pointer-events-none"
              />
              <input
                id="location-search"
                name="search"
                type="search"
                autoComplete="off"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for a location..."
                className="h-12 lg:h-20 w-full lg:max-w-142 rounded-full bg-white pl-10 lg:pl-14 pr-4 lg:pr-40 text-sm lg:text-xl font-medium text-blue-950 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              />
              <button
                type="submit"
                disabled={!searchQuery.trim()}
                className="absolute right-0.5 lg:right-3 top-1/2 -translate-y-1/2 rounded-full bg-primary-500 px-3 lg:px-7 py-2 lg:py-5 text-lg lg:text-2xl font-medium text-white transition-colors hover:bg-primary-600 active:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          </form>
        </div>

        <div className="relative mt-20 md:mt-0 lg:mt-79">
          <img
            src={object}
            alt="Student learning with modern technology"
            className="relative z-10"
            loading="eager"
          />
          <img
            src={ellipse}
            alt=""
            aria-hidden="true"
            className="absolute bottom-52 -right-9 hidden lg:flex"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
