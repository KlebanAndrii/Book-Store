const NavLink = ({ href, label, mobile = false }) => {
  return (
    <li>
      <a
        href={href}
        className={`relative group transition-all duration-200 inline-block ${
          mobile
            ? "hover:text-primary-500"
            : "hover:text-primary-400 hover:scale-110"
        }`}
      >
        {label}
        <span
          className={`absolute left-1/2 -bottom-1 w-0 h-0.5 -translate-x-1/2 transition-all duration-300 group-hover:w-full ${
            mobile ? "bg-primary-500" : "bg-primary-400"
          }`}
        />
      </a>
    </li>
  );
};

export default NavLink;
