import {
  Zap,
  ShieldCheck,
  Target,
  Handshake,
  Headphones,
  Sparkles,
} from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "We focus on efficient execution and clear timelines so your project keeps moving.",
  },
  {
    icon: ShieldCheck,
    title: "Quality First",
    desc: "Every project is built with attention to detail, performance and a professional finish.",
  },
  {
    icon: Target,
    title: "Growth Focused",
    desc: "We don't just create digital assets. We build solutions around your business goals.",
  },
  {
    icon: Handshake,
    title: "Transparent Approach",
    desc: "Clear communication, straightforward processes and no unnecessary complexity.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    desc: "We're available to help you improve, maintain and grow your digital presence.",
  },
  {
    icon: Sparkles,
    title: "Modern Solutions",
    desc: "We use modern technologies and creative ideas to keep your business competitive.",
  },
];

const WhyChoose = () => {
  return (
    <section
      id="why-us"
      className="bg-[#0B1023] py-24 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">

          <p className="text-pink-500 uppercase tracking-[5px] text-sm font-medium">
            Why KNOVAA
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Why Businesses Choose KNOVAA
          </h2>

          <p className="text-gray-400 text-lg mt-6 leading-8">
            We combine creativity, technology and business thinking to
            create digital solutions that are practical, professional
            and built for growth.
          </p>

        </div>

        {/* Reasons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="group bg-[#050816] border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-[0_20px_60px_rgba(236,72,153,0.10)]"
              >

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center transition-all duration-300 group-hover:bg-pink-500 group-hover:border-pink-500">

                  <Icon
                    size={27}
                    strokeWidth={1.8}
                    className="text-pink-400 transition-colors duration-300 group-hover:text-white"
                  />

                </div>

                {/* Title */}
                <h3 className="text-white text-xl font-semibold mt-6">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mt-3 leading-7">
                  {reason.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default WhyChoose;