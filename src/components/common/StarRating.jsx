const MAX_RATING = 5;

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const emptyStars = MAX_RATING - fullStars;

  return (
    <div
      role="img"
      aria-label={`Rating: ${rating} out of ${MAX_RATING}`}
      className="flex items-center"
    >
      <span className="text-orange-400" aria-hidden="true">
        {"★".repeat(fullStars)}
      </span>
      <span className="text-orange-200" aria-hidden="true">
        {"★".repeat(emptyStars)}
      </span>
    </div>
  );
}

export default StarRating;
