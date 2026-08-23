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
      className="relative bg-[#F5F1FF] py-24 scroll-mt-24 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-[#E9D5FF]/40 blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#DBEAFE]/50 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">

          <p className="text-[#5B21B6] uppercase tracking-[5px] text-sm font-semibold">
            Why KNOVAA
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B3D] mt-4">
            Why Businesses Choose KNOVAA
          </h2>

          <p className="text-[#64748B] text-lg mt-6 leading-8">
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
                className="group relative bg-white border border-[#DDE5F2] rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#C4B5FD] hover:shadow-[0_20px_60px_rgba(91,33,182,0.12)]"
              >

                {/* Top Gradient Line */}
                <div className="absolute top-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r from-[#5B21B6] to-[#EC4899] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />


                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F0E8FF] to-[#FCE7F3] border border-[#E9D5FF] flex items-center justify-center transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#5B21B6] group-hover:to-[#EC4899] group-hover:border-transparent">

                  <Icon
                    size={27}
                    strokeWidth={1.8}
                    className="text-[#5B21B6] transition-colors duration-300 group-hover:text-white"
                  />

                </div>


                {/* Title */}
                <h3 className="text-[#0D1B3D] text-xl font-semibold mt-6">
                  {reason.title}
                </h3>


                {/* Description */}
                <p className="text-[#64748B] mt-3 leading-7">
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