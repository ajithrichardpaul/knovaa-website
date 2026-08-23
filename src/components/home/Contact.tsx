import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#EEF5FF] py-24 scroll-mt-24 overflow-hidden"
    >

      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#DBEAFE]/50 blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#E9D5FF]/40 blur-3xl pointer-events-none" />


      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">

          <p className="text-[#5B21B6] uppercase tracking-[5px] text-sm font-semibold">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B3D] mt-4">
            Let's Grow Your Business
          </h2>

          <p className="text-[#64748B] text-lg mt-6 leading-8">
            Have a project in mind or want to improve your digital presence?
            Let's talk about how KNOVAA can help.
          </p>

        </div>


        {/* Contact Area */}
        <div className="grid lg:grid-cols-2 gap-12 mt-16">


          {/* =====================================
              CONTACT INFORMATION
          ===================================== */}

          <div className="relative bg-white border border-[#DDE5F2] rounded-3xl p-8 md:p-10 shadow-sm">

            {/* Gradient Top Line */}
            <div className="absolute top-0 left-10 right-10 h-1 rounded-full bg-gradient-to-r from-[#5B21B6] to-[#EC4899]" />

            <h3 className="text-2xl font-semibold text-[#0D1B3D]">
              Let's Talk
            </h3>

            <p className="text-[#64748B] mt-4 leading-7">
              Tell us a little about your business and what you're looking
              to achieve. We'll get back to you and discuss the best
              solution for your needs.
            </p>


            {/* Contact Details */}
            <div className="space-y-6 mt-10">


              {/* Email */}
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F0E8FF] to-[#FCE7F3] border border-[#E9D5FF] flex items-center justify-center">

                  <Mail
                    size={22}
                    className="text-[#5B21B6]"
                  />

                </div>

                <div>

                  <p className="text-[#64748B] text-sm">
                    Email
                  </p>

                  <p className="text-[#0D1B3D] mt-1 font-medium">
                    knovaadigitalsolutions@gmail.com
                  </p>

                </div>

              </div>


              {/* Phone */}
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F0E8FF] to-[#FCE7F3] border border-[#E9D5FF] flex items-center justify-center">

                  <Phone
                    size={22}
                    className="text-[#5B21B6]"
                  />

                </div>

                <div>

                  <p className="text-[#64748B] text-sm">
                    Phone
                  </p>

                  <p className="text-[#0D1B3D] mt-1 font-medium">
                    +91 93421 30383 - Whatsapp Only
                  </p>

                </div>

              </div>


              {/* Location */}
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F0E8FF] to-[#FCE7F3] border border-[#E9D5FF] flex items-center justify-center">

                  <MapPin
                    size={22}
                    className="text-[#5B21B6]"
                  />

                </div>

                <div>

                  <p className="text-[#64748B] text-sm">
                    Location
                  </p>

                  <p className="text-[#0D1B3D] mt-1 font-medium">
                    Coimbatore, Tamil Nadu, India
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* =====================================
              CONTACT FORM
          ===================================== */}

          <div className="relative bg-white border border-[#DDE5F2] rounded-3xl p-8 md:p-10 shadow-sm">

            {/* Gradient Top Line */}
            <div className="absolute top-0 left-10 right-10 h-1 rounded-full bg-gradient-to-r from-[#5B21B6] to-[#EC4899]" />

            <h3 className="text-2xl font-semibold text-[#0D1B3D]">
              Send Us a Message
            </h3>

            <form className="mt-8 space-y-5">


              {/* Name */}
              <div>

                <label className="text-[#0D1B3D] text-sm font-medium">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full mt-2 bg-[#F8FAFC] border border-[#DDE5F2] rounded-xl px-4 py-3 text-[#0D1B3D] placeholder-[#94A3B8] outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#E9D5FF] transition"
                />

              </div>


              {/* Email */}
              <div>

                <label className="text-[#0D1B3D] text-sm font-medium">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full mt-2 bg-[#F8FAFC] border border-[#DDE5F2] rounded-xl px-4 py-3 text-[#0D1B3D] placeholder-[#94A3B8] outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#E9D5FF] transition"
                />

              </div>


              {/* Message */}
              <div>

                <label className="text-[#0D1B3D] text-sm font-medium">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full mt-2 bg-[#F8FAFC] border border-[#DDE5F2] rounded-xl px-4 py-3 text-[#0D1B3D] placeholder-[#94A3B8] outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#E9D5FF] transition resize-none"
                />

              </div>


              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#5B21B6] to-[#EC4899] hover:shadow-lg hover:shadow-purple-200 text-white font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >

                Send Message

                <ArrowUpRight size={18} />

              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;