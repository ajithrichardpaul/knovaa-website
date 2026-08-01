const services = [
  {
    icon: "🌐",
    title: "Website Development",
    desc: "Modern, responsive websites designed to grow your business.",
  },
  {
    icon: "📈",
    title: "Digital Marketing",
    desc: "SEO, Google Ads, Meta Ads and lead generation strategies.",
  },
  {
    icon: "🎨",
    title: "Branding",
    desc: "Professional logos, brand identity and creative designs.",
  },
  {
    icon: "🤖",
    title: "AI Solutions",
    desc: "AI-powered automation and smart business workflows.",
  },
  {
    icon: "📱",
    title: "Social Media",
    desc: "Content creation and social media management.",
  },
  {
    icon: "💼",
    title: "Business Consulting",
    desc: "Helping businesses grow with digital strategies.",
  },
];

const Services = () => {
  return (
    <section
  id="services"
  className="bg-[#050816] py-24"
>
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-pink-500 uppercase tracking-[5px] text-center">
          Our Services
        </p>

        <h2 className="text-5xl font-bold text-white text-center mt-4">
          Helping Businesses Grow Digitally
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((service) => (

            <div
              key={service.title}
              className="rounded-3xl bg-[#0B1023] border border-white/10 p-8 hover:border-pink-500 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="text-5xl">
                {service.icon}
              </div>

              <h3 className="text-white text-2xl font-semibold mt-6">
                {service.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
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