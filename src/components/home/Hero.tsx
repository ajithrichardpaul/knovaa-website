const Hero = () => {
  return (
    <section className="min-h-screen bg-[#050816] flex items-center justify-center pt-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <p className="text-pink-500 uppercase tracking-[6px] mb-6">
          Welcome to KNOVAA
        </p>

        <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
          Grow Your Business
          <br />
          With Smart Digital Solutions
        </h1>

        <p className="text-gray-400 text-xl mt-8 max-w-3xl mx-auto">
          We build websites, create brands, run digital marketing campaigns,
          and help businesses grow with modern technology.
        </p>

        <div className="mt-10 flex justify-center gap-5">
          <button className="bg-pink-600 hover:bg-pink-500 px-8 py-4 rounded-full text-white transition">
            Get Free Consultation
          </button>

          <button className="border border-gray-600 hover:border-pink-500 px-8 py-4 rounded-full text-white transition">
            View Portfolio
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;