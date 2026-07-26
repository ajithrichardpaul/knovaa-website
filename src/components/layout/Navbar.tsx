import { Menu } from "lucide-react";

const Navbar = () => {
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

          <a href="#">Home</a>

          <a href="#">Services</a>

          <a href="#">Portfolio</a>

          <a href="#">About</a>

          <a href="#">Contact</a>

        </nav>

        {/* CTA Button */}
        <button className="hidden lg:block bg-pink-600 hover:bg-pink-500 px-6 py-3 rounded-full text-white transition">
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