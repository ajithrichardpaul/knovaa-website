const projects = [
  {
    name: "Kodemate Innovations",
    category: "Software & Technology",
    description:
      "A client project showcased by KNOVAA Digital Solutions.",
    services: [
      "Software & Technology",
    ],
  },
  {
    name: "Happy Kids Play School",
    category: "Play School",
    description:
      "Digital marketing and social media solutions designed to strengthen the school's online presence and connect with parents.",
    services: [
      "Digital Marketing",
      "Social Media Management",
      "Meta Ads",
    ],
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="relative bg-[#EEF5FF] py-24 scroll-mt-24 overflow-hidden"
    >

      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#E9D5FF]/40 blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#DBEAFE]/50 blur-3xl pointer-events-none" />


      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center">

          <p className="text-[#5B21B6] uppercase tracking-[5px] text-sm font-semibold">
            Our Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B3D] mt-4">
            Projects We've Worked On
          </h2>

          <p className="text-[#64748B] text-lg mt-6 leading-8">
            A look at some of the projects and digital solutions
            delivered by KNOVAA Digital Solutions.
          </p>

        </div>


        {/* Portfolio Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {projects.map((project) => (

            <div
              key={project.name}
              className="group relative bg-white border border-[#DDE5F2] rounded-3xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#C4B5FD] hover:shadow-[0_20px_60px_rgba(91,33,182,0.12)]"
            >

              {/* Gradient Top Line */}
              <div className="absolute top-0 left-10 right-10 h-1 rounded-full bg-gradient-to-r from-[#5B21B6] to-[#EC4899] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />


              {/* Category */}
              <p className="text-[#5B21B6] text-sm uppercase tracking-[3px] font-semibold">
                {project.category}
              </p>


              {/* Project Name */}
              <h3 className="text-3xl md:text-4xl font-bold text-[#0D1B3D] mt-4">
                {project.name}
              </h3>


              {/* Description */}
              <p className="text-[#64748B] leading-7 mt-5">
                {project.description}
              </p>


              {/* Services */}
              <div className="flex flex-wrap gap-3 mt-7">

                {project.services.map((service) => (

                  <span
                    key={service}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-[#F0E8FF] to-[#FCE7F3] border border-[#E9D5FF] text-[#5B21B6] text-sm font-medium transition-all duration-300 group-hover:border-[#C4B5FD]"
                  >
                    {service}
                  </span>

                ))}

              </div>


              {/* View Project Indicator */}
              <div className="flex items-center gap-2 mt-8 text-[#5B21B6] font-semibold text-sm">

                <span className="transition-colors duration-300 group-hover:text-[#EC4899]">
                  KNOVAA Project
                </span>

                <span className="w-8 h-[2px] bg-gradient-to-r from-[#5B21B6] to-[#EC4899] transition-all duration-300 group-hover:w-12" />

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Portfolio;