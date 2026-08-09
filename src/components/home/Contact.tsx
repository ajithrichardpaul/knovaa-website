import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#050816] py-24 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">

          <p className="text-pink-500 uppercase tracking-[5px] text-sm font-medium">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Let's Grow Your Business
          </h2>

          <p className="text-gray-400 text-lg mt-6 leading-8">
            Have a project in mind or want to improve your digital presence?
            Let's talk about how KNOVAA can help.
          </p>

        </div>

        {/* Contact Area */}
        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          {/* Contact Information */}
          <div className="bg-[#0B1023] border border-white/10 rounded-3xl p-8 md:p-10">

            <h3 className="text-2xl font-semibold text-white">
              Let's Talk
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              Tell us a little about your business and what you're looking
              to achieve. We'll get back to you and discuss the best
              solution for your needs.
            </p>

            <div className="space-y-6 mt-10">

              {/* Email */}
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                  <Mail
                    size={22}
                    className="text-pink-400"
                  />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Email
                  </p>

                  <p className="text-white mt-1">
                    knovaadigitalsolutions@gmail.com
                  </p>
                </div>

              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                  <Phone
                    size={22}
                    className="text-pink-400"
                  />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Phone
                  </p>

                  <p className="text-white mt-1">
                    +91 93421 30383 - Whatsapp Only
                  </p>
                </div>

              </div>

              {/* Location */}
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                  <MapPin
                    size={22}
                    className="text-pink-400"
                  />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Location
                  </p>

                  <p className="text-white mt-1">
                    Coimbatore, Tamil Nadu, India
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-[#0B1023] border border-white/10 rounded-3xl p-8 md:p-10">

            <h3 className="text-2xl font-semibold text-white">
              Send Us a Message
            </h3>

            <form className="mt-8 space-y-5">

              <div>
                <label className="text-gray-300 text-sm">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full mt-2 bg-[#050816] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-pink-500 transition"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full mt-2 bg-[#050816] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-pink-500 transition"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full mt-2 bg-[#050816] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-pink-500 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-pink-600 hover:bg-pink-500 text-white font-medium py-4 rounded-xl transition flex items-center justify-center gap-2"
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