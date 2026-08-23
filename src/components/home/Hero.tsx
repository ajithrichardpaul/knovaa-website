import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#EEF5FF] via-[#F5F1FF] to-[#EAF2FF] pt-24"
    >
      {/* =====================================
          BACKGROUND DECORATIONS
      ===================================== */}

      {/* Soft Main Glow */}
      <div className="absolute right-[18%] top-[8%] w-[350px] h-[350px] md:w-[480px] md:h-[480px] rounded-full bg-gradient-to-br from-purple-100 via-pink-50 to-transparent opacity-80" />

      {/* Small Decorative Circles */}
      <div className="absolute top-24 right-[9%] w-7 h-7 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 opacity-70" />

      <div className="absolute top-[42%] right-[48%] w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-pink-100" />

      {/* Decorative Dots - Top */}
      <div className="absolute top-28 right-[47%] opacity-60 hidden md:block">
        <div className="grid grid-cols-3 gap-3">
          {Array.from({ length: 9 }).map((_, index) => (
            <span
              key={index}
              className="w-2 h-2 rounded-full bg-purple-200"
            />
          ))}
        </div>
      </div>

      {/* Decorative Dots - Right */}
      <div className="absolute right-[3%] top-[48%] opacity-40 hidden md:block">
        <div className="grid grid-cols-5 gap-4">
          {Array.from({ length: 20 }).map((_, index) => (
            <span
              key={index}
              className="w-1.5 h-1.5 rounded-full bg-purple-200"
            />
          ))}
        </div>
      </div>

      {/* =====================================
          MAIN CONTAINER
      ===================================== */}

      <div className="relative max-w-7xl mx-auto px-6 min-h-[calc(100vh-96px)] flex items-center">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">

          {/* =====================================
              LEFT CONTENT
          ===================================== */}

          <div className="relative z-10 text-center lg:text-left">

            {/* Small Heading */}
            <p className="text-sm md:text-base uppercase tracking-[5px] font-bold mb-6">
              <span className="text-[#5B21B6]">
                Welcome to
              </span>{" "}
              <span className="bg-gradient-to-r from-[#5B21B6] to-[#EC4899] bg-clip-text text-transparent">
                KNOVAA
              </span>
            </p>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.08] text-[#0D1B3D]">

              Grow Your Business

              <br />

              <span className="bg-gradient-to-r from-[#5B21B6] via-[#8B2FC9] to-[#EC4899] bg-clip-text text-transparent">
                With Smart Digital Solutions
              </span>

            </h1>

            {/* Description */}
            <p className="text-[#475569] text-lg md:text-xl mt-8 max-w-2xl mx-auto lg:mx-0 leading-8">
              We build websites, create brands, run digital marketing
              campaigns, and help businesses grow with modern technology.
            </p>

            {/* =====================================
                BUTTONS
            ===================================== */}

            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-5">

              {/* WhatsApp Consultation */}
              <a
                href="https://wa.me/919342130383?text=Hi%20KNOVAA%2C%20I%27d%20like%20to%20get%20a%20free%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-[#5B21B6] to-[#EC4899] shadow-lg shadow-purple-200 hover:shadow-xl hover:shadow-pink-200 hover:-translate-y-1 transition-all duration-300"
              >
                Get Free Consultation

                <ArrowUpRight
                  size={20}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </a>

              {/* View Portfolio */}
              <button
                onClick={() =>
                  document.getElementById("portfolio")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="px-8 py-4 rounded-xl border-2 border-[#7C3AED] text-[#0D1B3D] font-semibold bg-white/80 hover:bg-[#F5F0FF] hover:border-[#EC4899] transition-all duration-300"
              >
                View Portfolio
              </button>

            </div>

          </div>


          {/* =====================================
              RIGHT GROWTH GRAPHIC
          ===================================== */}

          <div className="relative h-[430px] md:h-[540px] flex items-center justify-center">

            {/* Large Glow */}
            <div className="absolute w-[300px] h-[300px] md:w-[440px] md:h-[440px] rounded-full bg-gradient-to-br from-[#DDEBFF] via-[#F1E8FF] to-transparent " />


            {/* Decorative Dots */}
            <div className="absolute top-[22%] left-[8%] grid grid-cols-4 gap-3 opacity-50">
              {Array.from({ length: 12 }).map((_, index) => (
                <span
                  key={index}
                  className="w-1.5 h-1.5 rounded-full bg-purple-200"
                />
              ))}
            </div>


            {/* Floating Circle */}
            <div className="absolute left-[3%] top-[47%] w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-purple-100 to-pink-100" />


            {/* =====================================
                3D GROWTH BARS
            ===================================== */}

            <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2 flex items-end gap-3 md:gap-5">

              {/* 3D BAR 1 */}
              <div className="relative w-12 h-10 md:w-16 md:h-14">

                {/* Front */}
                <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-[#6D28D9] to-[#9333EA] shadow-[0_12px_25px_rgba(91,33,182,0.25)]" />

                {/* Right Side */}
                <div className="absolute top-0 right-0 w-3 h-full translate-x-3 bg-[#4C1D95] skew-y-[-35deg] origin-left rounded-r-sm" />

                {/* Top */}
                <div className="absolute top-0 left-0 w-full h-3 -translate-y-3 bg-gradient-to-r from-[#A855F7] to-[#EC4899] skew-x-[-45deg] origin-bottom rounded-sm" />

              </div>


              {/* 3D BAR 2 */}
              <div className="relative w-12 h-24 md:w-16 md:h-32">

                {/* Front */}
                <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-[#5B21B6] to-[#8B5CF6] shadow-[0_15px_30px_rgba(91,33,182,0.3)]" />

                {/* Right Side */}
                <div className="absolute top-0 right-0 w-3 h-full translate-x-3 bg-[#3B1475] skew-y-[-35deg] origin-left rounded-r-sm" />

                {/* Top */}
                <div className="absolute top-0 left-0 w-full h-3 -translate-y-3 bg-gradient-to-r from-[#8B5CF6] to-[#C084FC] skew-x-[-45deg] origin-bottom rounded-sm" />

              </div>


              {/* 3D BAR 3 */}
              <div className="relative w-12 h-36 md:w-16 md:h-44">

                {/* Front */}
                <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-[#5B21B6] via-[#7C3AED] to-[#A855F7] shadow-[0_18px_35px_rgba(91,33,182,0.3)]" />

                {/* Right Side */}
                <div className="absolute top-0 right-0 w-3 h-full translate-x-3 bg-[#401579] skew-y-[-35deg] origin-left rounded-r-sm" />

                {/* Top */}
                <div className="absolute top-0 left-0 w-full h-3 -translate-y-3 bg-gradient-to-r from-[#A78BFA] to-[#C084FC] skew-x-[-45deg] origin-bottom rounded-sm" />

              </div>


              {/* 3D BAR 4 */}
              <div className="relative w-12 h-28 md:w-16 md:h-40">

                {/* Front */}
                <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-[#6D28D9] to-[#A855F7] shadow-[0_18px_35px_rgba(124,58,237,0.3)]" />

                {/* Right Side */}
                <div className="absolute top-0 right-0 w-3 h-full translate-x-3 bg-[#4C1D95] skew-y-[-35deg] origin-left rounded-r-sm" />

                {/* Top */}
                <div className="absolute top-0 left-0 w-full h-3 -translate-y-3 bg-gradient-to-r from-[#C084FC] to-[#E879F9] skew-x-[-45deg] origin-bottom rounded-sm" />

              </div>


              {/* 3D BAR 5 */}
              <div className="relative w-12 h-44 md:w-16 md:h-56">

                {/* Front */}
                <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-[#A21CAF] via-[#D61F9B] to-[#EC4899] shadow-[0_20px_40px_rgba(236,72,153,0.35)]" />

                {/* Right Side */}
                <div className="absolute top-0 right-0 w-3 h-full translate-x-3 bg-[#86198F] skew-y-[-35deg] origin-left rounded-r-sm" />

                {/* Top */}
                <div className="absolute top-0 left-0 w-full h-3 -translate-y-3 bg-gradient-to-r from-[#E879F9] to-[#F472B6] skew-x-[-45deg] origin-bottom rounded-sm" />

              </div>

            </div>


            {/* =====================================
                CURVED GROWTH ARROW
            ===================================== */}

            <svg
              className="absolute w-[95%] h-[75%] pointer-events-none"
              viewBox="0 0 600 450"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >

              <defs>

                <linearGradient
                  id="arrowGradient"
                  x1="80"
                  y1="350"
                  x2="520"
                  y2="80"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    offset="0"
                    stopColor="#0D1B3D"
                  />

                  <stop
                    offset="0.55"
                    stopColor="#5B21B6"
                  />

                  <stop
                    offset="1"
                    stopColor="#0D1B3D"
                  />

                </linearGradient>

              </defs>


              {/* Curved Arrow */}
              <path
                d="M90 350 C220 355 380 300 485 155"
                stroke="url(#arrowGradient)"
                strokeWidth="18"
                strokeLinecap="round"
              />


              {/* Arrow Head */}
              <path
                d="M455 145 L520 90 L505 175 Z"
                fill="#0D1B3D"
              />

            </svg>


            {/* Floating Pink Circle */}
            <div className="absolute right-[8%] top-[25%] w-7 h-7 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-purple-200 to-pink-200" />

          </div>

        </div>

      </div>


      {/* Bottom Soft Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#EAF2FF] to-transparent pointer-events-none" />

    </section>
  );
};

export default Hero;