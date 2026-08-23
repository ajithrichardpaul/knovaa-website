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
      className="bg-[#EEF5FF] py-24 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center">

          <p className="text-[#5B21B6] uppercase tracking-[5px] text-sm font-semibold">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B3D] mt-4">
            Digital Solutions Built for Growth
          </h2>

          <p className="text-[#64748B] text-lg mt-6 leading-8">
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
                className="group relative bg-white border border-[#DDE5F2] rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#C4B5FD] hover:shadow-[0_20px_60px_rgba(91,33,182,0.12)]"
              >

                {/* Top Gradient Line */}
                <div className="absolute top-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r from-[#5B21B6] to-[#EC4899] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />


                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F0E8FF] to-[#FCE7F3] border border-[#E9D5FF] flex items-center justify-center transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#5B21B6] group-hover:to-[#EC4899] group-hover:border-transparent">

                  <Icon
                    size={28}
                    strokeWidth={1.8}
                    className="text-[#5B21B6] transition-colors duration-300 group-hover:text-white"
                  />

                </div>


                {/* Title */}
                <h3 className="text-[#0D1B3D] text-2xl font-semibold mt-7">
                  {service.title}
                </h3>


                {/* Description */}
                <p className="text-[#64748B] mt-4 leading-7">
                  {service.desc}
                </p>


                {/* Learn More */}
                <div className="flex items-center gap-2 mt-7 text-[#5B21B6] text-sm font-semibold">

                  <span className="group-hover:text-[#EC4899] transition-colors duration-300">
                    Learn More
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="transition-all duration-300 group-hover:text-[#EC4899] group-hover:translate-x-1 group-hover:-translate-y-1"
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