function FooterColumn({ title, links, className = "" }) {
  return (
    <div className={className}>
      <h3 className="text-slate-950 text-2xl font-semibold mb-7">{title}</h3>
      <ul className="text-zinc-600 text-lg font-normal space-y-4 sm:space-y-6">
        {links.map((link) => (
          <li
            key={link.label}
            className="hover:text-shadow-lg hover:text-primary-400 transition-all duration-200"
          >
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterColumn;
