import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.clientHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050816]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="KNOVAA"
            className="h-10 w-auto"
          />

          <div>
            <h1 className="text-xl font-bold text-white">
              KNOVAA
            </h1>

            <p className="text-xs text-pink-400">
              Digital Solutions
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-10 text-white">

          <a
            href="#home"
            className={`transition duration-300 ${
              active === "home"
                ? "text-pink-500"
                : "hover:text-pink-400"
            }`}
          >
            Home
          </a>

          <a
            href="#services"
            className={`transition duration-300 ${
              active === "services"
                ? "text-pink-500"
                : "hover:text-pink-400"
            }`}
          >
            Services
          </a>

          <a
            href="#portfolio"
            className={`transition duration-300 ${
              active === "portfolio"
                ? "text-pink-500"
                : "hover:text-pink-400"
            }`}
          >
            Portfolio
          </a>

          <a
            href="#about"
            className={`transition duration-300 ${
              active === "about"
                ? "text-pink-500"
                : "hover:text-pink-400"
            }`}
          >
            About
          </a>

          <a
            href="#contact"
            className={`transition duration-300 ${
              active === "contact"
                ? "text-pink-500"
                : "hover:text-pink-400"
            }`}
          >
            Contact
          </a>

        </nav>

        {/* CTA Button */}
        <button className="hidden lg:block bg-pink-600 hover:bg-pink-500 px-6 py-3 rounded-full text-white transition duration-300">
          Get Quote
        </button>

        {/* Mobile Menu */}
        <button className="lg:hidden text-white">
          <Menu size={28} />
        </button>

      </div>
    </header>
  );
};

export default Navbar;