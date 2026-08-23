import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

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

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <img
            src="/logo.png"
            alt="KNOVAA Digital Solutions"
            className="h-11 w-auto object-contain"
          />

          <div>
            <h1 className="text-xl font-bold text-[#0D1B3D]">
              KNOVAA
            </h1>

            <p className="text-xs font-medium bg-gradient-to-r from-[#5B21B6] to-[#EC4899] bg-clip-text text-transparent">
              Digital Solutions
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-9">

          {menuItems.map((item) => (

            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative font-medium transition-all duration-300 ${
                active === item.id
                  ? "text-[#5B21B6]"
                  : "text-[#0D1B3D] hover:text-[#EC4899]"
              }`}
            >
              {item.label}

              {/* Active underline */}
              {active === item.id && (
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-[#5B21B6] to-[#EC4899]" />
              )}
            </button>

          ))}

        </nav>

        {/* Desktop Button */}
        <button
          onClick={() => scrollToSection("contact")}
          className="hidden lg:block px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#5B21B6] to-[#EC4899] hover:shadow-lg hover:shadow-pink-500/25 hover:scale-105 transition-all duration-300"
        >
          Get Quote
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#0D1B3D] hover:text-[#5B21B6] transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="lg:hidden bg-white border-t border-slate-200 shadow-lg">

          <div className="flex flex-col p-6 gap-5">

            {menuItems.map((item) => (

              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left font-medium transition ${
                  active === item.id
                    ? "text-[#5B21B6]"
                    : "text-[#0D1B3D] hover:text-[#EC4899]"
                }`}
              >
                {item.label}
              </button>

            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-[#5B21B6] to-[#EC4899] rounded-full py-3 text-white font-semibold hover:shadow-lg transition"
            >
              Get Quote
            </button>

          </div>

        </div>

      )}

    </header>
  );
};

export default Navbar;