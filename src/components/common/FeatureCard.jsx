const FeatureCard = ({ icon, iconAlt, title, description }) => {
  return (
    <div className="flex gap-6">
      <div className="w-20 h-20 lg:w-25 lg:h-25 p-4 lg:p-6 bg-primary-500 rounded-[23px] shrink-0 flex items-center justify-center">
        <img
          src={icon}
          alt={iconAlt}
          className="w-full h-full object-contain"
        />
      </div>
      <div>
        <h3 className="text-slate-900 text-2xl lg:text-3xl font-medium leading-10 lg:leading-13 mb-1">
          {title}
        </h3>
        <p className="text-zinc-500 text-xl lg:text-2xl font-medium leading-8 lg:leading-10">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
