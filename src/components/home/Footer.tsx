import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#03050D] border-t border-white/10">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">

            <div className="flex items-center gap-3">

              <img
                src="/logo.png"
                alt="KNOVAA Digital Solutions"
                className="h-11 w-auto"
              />

              <div>
                <h2 className="text-xl font-bold text-white">
                  KNOVAA
                </h2>

                <p className="text-xs text-pink-400">
                  Digital Solutions
                </p>
              </div>

            </div>

            <p className="text-gray-400 leading-7 mt-6 max-w-md">
              Helping businesses build a stronger digital presence through
              websites, digital marketing, branding and modern technology.
            </p>


            {/* Social Icons */}
            <div className="flex gap-3 mt-7">

              {/* Instagram */}
            <a
              href="https://www.instagram.com/knovaa_digital6/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-pink-400 hover:border-pink-500/50 transition"
            >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    width="20"
                    height="20"
                    x="2"
                    y="2"
                    rx="5"
                  />

                  <path
                    d="M16 11.37A4 4 0 1 1 12.63 8
                    4 4 0 0 1 16 11.37z"
                  />

                  <line
                    x1="17.5"
                    x2="17.51"
                    y1="6.5"
                    y2="6.5"
                  />
                </svg>
              </a>


              {/* LinkedIn */}
              <a
              href="https://www.linkedin.com/company/knovaa-digital-solutions/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-pink-400 hover:border-pink-500/50 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7
                    a2 2 0 0 0-2-2
                    2 2 0 0 0-2 2v7h-4v-7
                    a6 6 0 0 1 6-6z"
                  />

                  <rect
                    width="4"
                    height="12"
                    x="2"
                    y="9"
                  />

                  <circle
                    cx="4"
                    cy="4"
                    r="2"
                  />
                </svg>
              </a>

            </div>

          </div>


          {/* Quick Links */}
          <div>

            <h3 className="text-white font-semibold text-lg">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 mt-6">

              <a
                href="#home"
                className="text-gray-400 hover:text-pink-400 transition"
              >
                Home
              </a>

              <a
                href="#services"
                className="text-gray-400 hover:text-pink-400 transition"
              >
                Services
              </a>

              <a
                href="#about"
                className="text-gray-400 hover:text-pink-400 transition"
              >
                About
              </a>

              <a
                href="#why-us"
                className="text-gray-400 hover:text-pink-400 transition"
              >
                Why KNOVAA
              </a>

              <a
                href="#contact"
                className="text-gray-400 hover:text-pink-400 transition"
              >
                Contact
              </a>

            </div>

          </div>


          {/* Contact */}
          <div>

            <h3 className="text-white font-semibold text-lg">
              Contact
            </h3>

            <div className="flex flex-col gap-5 mt-6">

              {/* Email */}
              <div className="flex gap-3">

                <Mail
                  size={19}
                  className="text-pink-400 mt-1 shrink-0"
                />

                <span className="text-gray-400">
                  knovaadigitalsolutions@gmail.com
                </span>

              </div>


              {/* Phone */}
              <div className="flex gap-3">

                <Phone
                  size={19}
                  className="text-pink-400 mt-1 shrink-0"
                />

                <span className="text-gray-400">
                  +91 XXXXX XXXXX
                </span>

              </div>


              {/* Location */}
              <div className="flex gap-3">

                <MapPin
                  size={19}
                  className="text-pink-400 mt-1 shrink-0"
                />

                <span className="text-gray-400">
                  Coimbatore, Tamil Nadu, India
                </span>

              </div>

            </div>


            {/* Contact Link */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-7 text-pink-400 hover:text-pink-300 transition"
            >
              Get in touch
              <ArrowUpRight size={17} />
            </a>

          </div>

        </div>

      </div>


      {/* Bottom Bar */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} KNOVAA Digital Solutions.
            All rights reserved.
          </p>

          <p className="text-gray-600 text-sm">
            Built with purpose. Designed for growth.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;