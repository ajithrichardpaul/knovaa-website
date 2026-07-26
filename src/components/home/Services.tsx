const services = [
  {
    title: "Website Development",
    desc: "Modern, responsive websites that convert visitors into customers.",
  },
  {
    title: "Digital Marketing",
    desc: "Google Ads, Meta Ads and lead generation campaigns.",
  },
  {
    title: "SEO Optimization",
    desc: "Improve your Google rankings and organic traffic.",
  },
  {
    title: "Social Media Management",
    desc: "Grow your brand with engaging social media content.",
  },
  {
    title: "Brand Identity",
    desc: "Logo, branding and business design solutions.",
  },
  {
    title: "AI Business Solutions",
    desc: "AI-powered automation and productivity solutions.",
  },
];

const Services = () => {
  return (
    <section className="bg-[#050816] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-pink-500 uppercase tracking-[4px] text-center mb-3">
          Our Services
        </p>

        <h2 className="text-5xl font-bold text-white text-center mb-14">
          What We Do
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#0B1023] rounded-2xl p-8 border border-white/10 hover:border-pink-500 transition"
            >
              <h3 className="text-white text-xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;