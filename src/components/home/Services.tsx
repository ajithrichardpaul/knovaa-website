import {
  Globe,
  TrendingUp,
  Palette,
  Bot,
  Smartphone,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Modern, responsive websites designed to build credibility and turn visitors into customers.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    desc: "SEO, Google Ads, Meta Ads and growth strategies designed to reach the right audience.",
  },
  {
    icon: Palette,
    title: "Branding & Design",
    desc: "Create a memorable brand identity with professional logos, graphics and visual design.",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    desc: "Smart AI-powered solutions and automation that help businesses save time and work efficiently.",
  },
  {
    icon: Smartphone,
    title: "Social Media",
    desc: "Engaging content and social media strategies that help your brand build a strong online presence.",
  },
  {
    icon: Briefcase,
    title: "Business Consulting",
    desc: "Practical digital strategies to help businesses improve their online presence and grow.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[#050816] py-24 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center">

          <p className="text-pink-500 uppercase tracking-[5px] text-sm font-medium">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Digital Solutions Built for Growth
          </h2>

          <p className="text-gray-400 text-lg mt-6 leading-8">
            From building your digital presence to growing your audience,
            KNOVAA provides practical digital solutions designed around
            your business goals.
          </p>

        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative bg-[#0B1023] border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/50 hover:shadow-[0_20px_60px_rgba(236,72,153,0.12)]"
              >

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center transition-all duration-300 group-hover:bg-pink-500 group-hover:border-pink-500">

                  <Icon
                    size={28}
                    strokeWidth={1.8}
                    className="text-pink-400 transition-colors duration-300 group-hover:text-white"
                  />

                </div>

                {/* Title */}
                <h3 className="text-white text-2xl font-semibold mt-7">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mt-4 leading-7">
                  {service.desc}
                </p>

                {/* Learn More */}
                <div className="flex items-center gap-2 mt-7 text-pink-400 text-sm font-medium">

                  <span className="group-hover:text-pink-300 transition">
                    Learn More
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Services;