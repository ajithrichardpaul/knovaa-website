import { UserRound } from "lucide-react";

const team = [
  {
    name: "Karishma A M",
    founder: true,
    role: "Data Analyst & Digital Strategist",
    image: "",
  },
  {
    name: "Richard Paul R",
    role: "Business Consultant & Web Developer",
    image: "",
  },
  {
    name: "Varsha",
    role: "Web Developer & BDE",
    image: "",
  },
];

const OurTeam = () => {
  return (
    <section
      id="team"
      className="bg-[#050816] py-24 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center">

          <p className="text-pink-500 uppercase tracking-[5px] text-sm font-medium">
            Our Team
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Meet the People Behind KNOVAA
          </h2>

          <p className="text-gray-400 text-lg mt-6 leading-8">
            A passionate team combining technology, creativity and
            digital strategy to help businesses grow.
          </p>

        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">

          {team.map((member) => (

            <div
              key={member.name}
              className="group bg-[#0B1023] border border-white/10 rounded-3xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/40"
            >

              {/* Profile Image */}
              <div className="flex justify-center">

                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-pink-500/20 bg-[#050816] flex items-center justify-center">

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
                      className="text-gray-500"
                    />
                  )}

                </div>

              </div>

<h3 className="text-2xl font-bold text-white mt-4">
  {member.name}
</h3>

{member.founder && (
  <p className="text-white text-sm font-medium mt-2">
    Founder
  </p>
)}

<p className="text-pink-400 text-base mt-2 leading-6">
  {member.role}
</p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default OurTeam;