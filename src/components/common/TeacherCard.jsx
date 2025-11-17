const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/",
  linkedin: "https://www.linkedin.com/",
};

function TeacherCard({ image, name, nickname, text, category, social }) {
  return (
    <article className="">
      <div className="bg-white shadow-border hover:shadow-border/30 rounded-xl transition-shadow duration-300 overflow-hidden">
        <div className="p-3.5">
          <img
            src={image}
            alt={`${name} - ${nickname}`}
            className="aspect-(--my-aspect-ratio) w-full rounded-xl object-cover"
            loading="lazy"
          />
        </div>

        <div className="px-3.5 mb-5">
          <h3 className="text-black text-xl font-medium font-poppins">
            {name}
          </h3>
          <p className="text-zinc-500 text-base font-medium font-poppins mb-4">
            {nickname}
          </p>
          <p className="text-neutral-400 text-lg font-normal leading-6 mb-5.5">
            {text}
          </p>

          <footer className="flex justify-between items-center">
            <span className="text-orange-500 text-lg font-medium font-poppins">
              {category}
            </span>

            <nav className="flex gap-7" aria-label={`${name}'s social media`}>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}'s Instagram`}
              >
                <img
                  src={social.instagram}
                  alt=""
                  className="rounded-sm hover:scale-105 hover:shadow-lg/20 transition-all duration-300"
                  width="24"
                  height="24"
                />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}'s LinkedIn`}
              >
                <img
                  src={social.linkedin}
                  alt=""
                  className="rounded-sm hover:scale-105 hover:shadow-lg/20 transition-all duration-300"
                  width="24"
                  height="24"
                />
              </a>
            </nav>
          </footer>
        </div>
      </div>
    </article>
  );
}

export default TeacherCard;
