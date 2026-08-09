import { UserRound } from "lucide-react";

const team = [
  {
    name: "Karishma A M",
    role: "Founder & Digital Strategist",
    image: "/team/karishma.png",
  },
  {
    name: "Ajith R P",
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
        <div className="grid lg:grid-cols-3 gap-6 mt-16">

          {team.map((member) => (

            <div
              key={member.name}
              className="group bg-[#0B1023] border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/40"
            >

              <div className="flex h-72">

                {/* Image */}
                <div className="w-1/2 h-full bg-[#050816]">

                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <UserRound
                        size={70}
                        strokeWidth={1.2}
                        className="text-gray-500"
                      />
                    </div>
                  )}

                </div>


                {/* Details */}
                <div className="w-1/2 p-6 flex flex-col justify-center">

                  <p className="text-pink-500 uppercase tracking-[2px] text-xs font-medium">
                    KNOVAA Team
                  </p>

                  <h3 className="text-xl font-bold text-white mt-3">
                    {member.name}
                  </h3>

                  <p className="text-pink-400 text-sm mt-2 leading-5">
                    {member.role}
                  </p>

                  <div className="w-10 h-[2px] bg-pink-500 mt-5" />

                  <p className="text-gray-400 text-sm leading-6 mt-5">
                    Helping businesses grow through technology,
                    creativity and smart digital solutions.
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default OurTeam;