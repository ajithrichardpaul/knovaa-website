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
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050816]/80 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <img
            src="/logo.png"
            alt="KNOVAA"
            className="h-10"
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

        <nav className="hidden lg:flex gap-10">

          {menuItems.map((item) => (

            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`transition ${
                active === item.id
                  ? "text-pink-500"
                  : "text-white hover:text-pink-400"
              }`}
            >
              {item.label}
            </button>

          ))}

        </nav>

        {/* Desktop Button */}

        <button
          onClick={() => scrollToSection("contact")}
          className="hidden lg:block bg-pink-600 hover:bg-pink-500 px-6 py-3 rounded-full text-white transition"
        >
          Get Quote
        </button>

        {/* Mobile Icon */}

        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden bg-[#050816] border-t border-white/10">

          <div className="flex flex-col p-6 gap-6">

            {menuItems.map((item) => (

              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left transition ${
                  active === item.id
                    ? "text-pink-500"
                    : "text-white"
                }`}
              >
                {item.label}
              </button>

            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="bg-pink-600 rounded-full py-3 text-white"
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