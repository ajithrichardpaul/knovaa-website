import { UserRound } from "lucide-react";

const team = [
  {
    name: "Karishma A M",
    founder: true,
    role: "Data Analyst & Digital Strategist",
    image: "",
  },
  {
    name: "Varsha P",
    founder: false,
    role: "Web Developer & BDE",
    image: "",
  },
];

const OurTeam = () => {
  return (
    <section
      id="team"
      className="relative bg-[#F5F1FF] py-24 scroll-mt-24 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#DBEAFE]/50 blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#E9D5FF]/40 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#5B21B6] uppercase tracking-[5px] text-sm font-semibold">
            Our Team
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B3D] mt-4">
            Meet the People Behind KNOVAA
          </h2>

          <p className="text-[#64748B] text-lg mt-6 leading-8">
            A passionate team combining technology, creativity and
            digital strategy to help businesses grow.
          </p>
        </div>

        {/* Automatically centred team cards */}
        <div className="flex flex-wrap justify-center items-stretch gap-8 mt-16">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] max-w-[440px] bg-white border border-[#DDE5F2] rounded-3xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[#C4B5FD] hover:shadow-[0_20px_60px_rgba(91,33,182,0.12)]"
            >
              {/* Top Gradient Line */}
              <div className="absolute top-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r from-[#5B21B6] to-[#EC4899] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Profile Image */}
              <div className="flex justify-center">
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-[#E9D5FF] bg-gradient-to-br from-[#F0E8FF] to-[#FCE7F3] flex items-center justify-center transition-all duration-300 group-hover:border-[#C4B5FD]">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <UserRound
                      size={65}
                      strokeWidth={1.2}
                      className="text-[#94A3B8]"
                    />
                  )}
                </div>
              </div>

              {/* Name */}
              <h3 className="text-2xl font-bold text-[#0D1B3D] mt-6">
                {member.name}
              </h3>

              {/* Founder */}
              {member.founder && (
                <p className="text-[#5B21B6] text-sm font-semibold mt-2">
                  Founder
                </p>
              )}

              {/* Role */}
              <p className="text-[#EC4899] text-base font-medium mt-2 leading-6">
                {member.role}
              </p>

              {/* Decorative Line */}
              <div className="w-10 h-[2px] mx-auto mt-5 bg-gradient-to-r from-[#5B21B6] to-[#EC4899] transition-all duration-300 group-hover:w-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;