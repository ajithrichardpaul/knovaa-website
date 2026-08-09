const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="bg-[#050816] py-24 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="text-pink-500 uppercase tracking-[5px] text-sm">
            Our Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Our Projects
          </h2>

          <p className="text-gray-400 mt-6">
            Projects delivered by KNOVAA Digital Solutions.
          </p>

        </div>

        <div className="max-w-4xl mx-auto mt-16">

          <div className="bg-[#0B1023] border border-white/10 rounded-3xl overflow-hidden">


            <div className="p-8">

              <p className="text-pink-500 text-sm uppercase tracking-[3px]">
                Play School
              </p>

              <h3 className="text-3xl font-bold text-white mt-3">
                Happy Kids Play School
              </h3>

              <p className="text-gray-400 leading-7 mt-5">
                Digital marketing and social media solutions designed
                to strengthen the school's online presence and connect
                with parents.
              </p>

              <div className="flex flex-wrap gap-3 mt-7">

                <span className="px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-sm">
                  Digital Marketing
                </span>

                <span className="px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-sm">
                  Social Media Management
                </span>

                <span className="px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-sm">
                  Meta Ads
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Portfolio;