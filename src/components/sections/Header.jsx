import { useEffect, useState, useCallback } from "react";
import logo from "../../assets/images/header/logo.svg";
import NavLink from "../common/NavLink";
import BurgerButton from "../common/BurgerButton";
import { navLinks } from "../../data/navLinks";

const SCROLL_THRESHOLD = 10;
const THROTTLE_DELAY = 100;


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    let throttleTimeout = null;

    const handleScroll = () => {
      if (throttleTimeout === null) {
        throttleTimeout = setTimeout(() => {
          const isScrolled = window.scrollY > SCROLL_THRESHOLD;
          setScrolled(isScrolled);
          throttleTimeout = null;
        }, THROTTLE_DELAY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (throttleTimeout) clearTimeout(throttleTimeout);
    };
  }, []);


  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 max-w-[1920px] mx-auto transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-orange-50"
      }`}
    >
      <div className="container-3xl flex items-center justify-between py-2">
        {/* Logo */}
        <div className="flex items-center gap-2 px-2 z-50">
          <img src={logo} alt="" className="w-14 h-13" width="56" height="52" />
          <a
            href="/"
            className="text-stone-900 text-2xl font-bold leading-8 hover:text-primary-500 transition-colors"
          >
            Book Store
          </a>
        </div>

      
        <div className="hidden lg:flex items-center gap-15">
          <nav aria-label="Main navigation">
            <ul className="flex gap-8 xl:gap-11 text-stone-900 text-lg font-semibold">
              {navLinks.map((link) => (
                <NavLink key={link.href} {...link} />
              ))}
            </ul>
          </nav>
          <a
            href="#signin"
            className="bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition-colors duration-200 rounded-full text-white text-2xl font-medium px-14 py-4.5 hover:shadow-xl/30 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Sign in
          </a>
        </div>

      
        <BurgerButton isOpen={isMenuOpen} onClick={toggleMenu} />

        
        <div
          onClick={closeMenu}
          className={`fixed inset-0 z-30 lg:hidden bg-orange-100/90 backdrop-blur-sm transform transition-transform duration-700 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col gap-8 items-center text-center justify-center h-full"
          >
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col gap-8 text-stone-900 text-2xl font-extrabold">
                {navLinks.map((link) => (
                  <NavLink key={link.href} {...link} mobile />
                ))}
              </ul>
            </nav>
            <hr className="w-2xs border-t border-orange-500" />
            <a
              href="#signin"
              className="max-w-64 bg-primary-500 hover:bg-primary-400 active:bg-primary-700 transition-colors duration-200 rounded-full text-white text-2xl font-medium px-10 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Sign in
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
