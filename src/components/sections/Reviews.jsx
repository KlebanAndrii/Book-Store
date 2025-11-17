import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import arrow from "../../assets/images/reviews/arrow.svg";
import planet from "../../assets/images/reviews/planet.svg";
import { testimonials } from "../../data/testimonials";

const SWIPE_THRESHOLD = 50;
const ANIMATION_DURATION = 300;

const BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 1024,
};

const SLIDES_CONFIG = {
  MOBILE: 1,
  TABLE: 2,
  DESKTOP: 3,
};

function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(SLIDES_CONFIG.DESKTOP);

  const maxIndex = Math.max(0, testimonials.length - slidesPerView);
  const slideWidth = 100 / slidesPerView;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < BREAKPOINTS.MOBILE) {
        setSlidesPerView(SLIDES_CONFIG.MOBILE);
      } else if (width < BREAKPOINTS.TABLET) {
        setSlidesPerView(SLIDES_CONFIG.TABLE);
      } else {
        setSlidesPerView(SLIDES_CONFIG.DESKTOP);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleAnimation = useCallback((callback) => {
    setIsAnimating(true);
    callback();
    setTimeout(() => setIsAnimating(false), ANIMATION_DURATION);
  }, []);

  const nextSlide = useCallback(() => {
    if (isAnimating || currentIndex >= maxIndex) return;

    handleAnimation(() => {
      setCurrentIndex((prev) => prev + 1);
    });
  }, [isAnimating, currentIndex, maxIndex, handleAnimation]);

  const prevSlide = useCallback(() => {
    if (isAnimating || currentIndex <= 0) return;

    handleAnimation(() => {
      setCurrentIndex((prev) => prev - 1);
    });
  }, [isAnimating, currentIndex, handleAnimation]);

  const goToSlide = useCallback(
    (index) => {
      if (isAnimating) return;

      handleAnimation(() => {
        setCurrentIndex(index);
      });
    },
    [isAnimating, handleAnimation]
  );

  const handleTouchStart = useCallback((e) => {
    setTouchStart(e.touches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e) => {
    setTouchEnd(e.touches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > SWIPE_THRESHOLD;
    const isRightSwipe = distance < -SWIPE_THRESHOLD;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  }, [touchStart, touchEnd, nextSlide, prevSlide]);

  const isPrevDisabled = isAnimating || currentIndex <= 0;
  const isNextDisabled = isAnimating || currentIndex >= maxIndex;

  return (
    <section className="relative">
      <div className="container-3xl pt-32.5 pb-8.5">
        <header className="text-center">
          <h2 className="text-slate-900 text-4xl font-semibold capitalize leading-17 tracking-wide">
            What student’s say
          </h2>
          <p className="text-zinc-500 text-xl font-medium">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </header>
        <div className="relative px-0 md:px-14 lg:px-18 xl:px-28">
          <button
            onClick={prevSlide}
            disabled={isPrevDisabled}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg inset-shadow-sm inset-shadow-primary-500 hover:bg-orange-50 transition-all disabled:opacity-30 disabled:cursor-not-allowed hidden md:flex"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-primary-500" />
          </button>

          <div className="overflow-hidden">
            <div
              style={{
                transform: `translateX(-${currentIndex * slideWidth}%)`,
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="flex transition-transform duration-300 ease-out"
            >
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.id}
                  style={{ width: `${slideWidth}%` }}
                  className="shrink-0 px-3 py-12.5"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-(--shadow-border) h-full flex flex-col hover:shadow-md transition-shadow">
                    <blockquote className="text-neutral-400 text-lg font-normal leading-7 tracking-tight mb-6 grow">
                      "{testimonial.text}"
                    </blockquote>
                    <footer className="flex items-center gap-4 mt-auto">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <h4 className="text-neutral-700 text-base font-medium leading-7 tracking-tight">
                          {testimonial.author}
                        </h4>
                        <p className="text-neutral-400 text-xs font-normal leading-5 tracking-tight">
                          {testimonial.role}
                        </p>
                      </div>
                    </footer>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            disabled={isNextDisabled}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg inset-shadow-sm inset-shadow-primary-500 hover:bg-orange-50 transition-all disabled:opacity-30 disabled:cursor-not-allowed hidden md:flex"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-primary-500" />
          </button>
        </div>

        <nav
          className="flex justify-center gap-2 mt-7.5"
          aria-label="Slide navigation"
        >
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-gray-900 w-8"
                  : "bg-gray-300 w-2 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentIndex === index ? "true" : undefined}
            ></button>
          ))}
        </nav>
      </div>
      <img
        src={arrow}
        alt=""
        className="absolute left-20 -bottom-10 hidden 2xl:flex"
        aria-hidden="true"
      />
      <img
        src={planet}
        alt=""
        className="absolute right-34 -bottom-4 hidden 2xl:flex"
        aria-hidden="true"
      />
    </section>
  );
}

export default Reviews;
