import { learnCards } from "../../data/learnCards";

function Learn() {
  return (
    <section className="relative" aria-label="Learning features">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="h-1/2 bg-orange-50" />
        <div className="h-1/2 bg-white" />
      </div>

      <div className="container-3xl relative">
        <div className="mx-auto max-w-358 flex flex-col lg:grid lg:grid-cols-3 gap-4 lg:gap-7 bg-primary-500 rounded-[14px] py-8 px-4 lg:py-17.5 lg:px-9">
          {learnCards.map((card) => (
            <article
              key={card.id}
              className="flex flex-col items-center text-center sm:text-start sm:items-start sm:flex-row gap-3 lg:gap-6"
            >
              <div
                className="w-16 h-16 lg:w-25 lg:h-25 p-4 lg:p-6 bg-primary-400 rounded-[23px] shrink-0 flex items-center justify-center"
                aria-hidden="true"
              >
                <img
                  src={card.picture}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <h3 className="text-white text-xl lg:text-3xl font-bold mb-2 lg:mb-4">
                  {card.title}
                </h3>
                <p className="text-white/60 text-sm lg:text-base font-medium leading-6 lg:leading-7">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Learn;
