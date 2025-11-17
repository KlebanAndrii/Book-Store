import CourseStats from "./CourseStats";
import StarRating from "./StarRating";

function CourseCard({
  image,
  category,
  rating,
  title,
  price,
  duration,
  coursesCount,
  salesCount,
}) {
  return (
    <article className="relative pb-7 group">
      <div className="bg-white shadow-border group-hover:shadow-border/30 rounded-xl transition-shadow duration-300 overflow-hidden">
        <div className="p-3.5">
          <img
            src={image}
            alt={title}
            className="aspect-(--my-aspect-ratio) w-full rounded-xl object-cover"
            loading="lazy"
          />
        </div>

        <div className="px-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-neutral-400 text-base font-medium font-poppins">
              {category}
            </span>
            <StarRating rating={rating} />
          </div>

          <h3 className="text-black text-xl font-medium font-poppins mb-1">
            {title}
          </h3>

          <p className="text-orange-500 text-xl font-semibold mb-2">${price}</p>

          <hr className="border-b border-dashed border-neutral-400 mb-4" />

          <CourseStats
            duration={duration}
            coursesCount={coursesCount}
            salesCount={salesCount}
          />
        </div>
      </div>
      <button
        aria-label={`Join ${title} course`}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 hover:bg-orange-600 shadow-xl group-hover:shadow-xl/20 text-white text-2xl font-medium py-3 px-9 transition-all duration-200 whitespace-nowrap"
      >
        Join Course
      </button>
    </article>
  );
}

export default CourseCard;
