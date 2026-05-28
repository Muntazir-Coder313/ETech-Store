import React, { useState } from "react";

import ContactBanner from "../Img/Contact Img.jpg";

import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

import {
  Mail,
  Phone,
  User,
  MapPin,
  Clock3,
  ShieldCheck,
  Headphones,
  Send,
} from "lucide-react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#fdf2f8] to-[#f0f9ff] overflow-hidden">

      {/* ================= HERO ================= */}

      <section className="relative h-[55vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden">

        <img
          src={ContactBanner}
          alt="Contact Banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6">

          <p className="uppercase tracking-[3px] sm:tracking-[5px] text-orange-400 font-semibold mb-3 sm:mb-4 text-xs sm:text-sm">
            Contact Us
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black max-w-[900px] leading-tight">
            Let’s Create Something Amazing Together
          </h1>

          <p className="text-sm sm:text-lg text-gray-200 mt-4 sm:mt-6 max-w-[700px] leading-7 sm:leading-[35px]">
            We build modern ecommerce experiences
            with clean UI, performance-focused
            React apps and scalable solutions.
          </p>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 lg:py-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">

          {/* ================= LEFT SIDE ================= */}

          <div className="rounded-[30px] sm:rounded-[40px] p-6 sm:p-10 lg:p-14 text-gray-900 relative overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl">

            {/* BG EFFECTS */}

            <div className="absolute w-56 sm:w-72 h-56 sm:h-72 bg-pink-300/20 blur-3xl rounded-full -top-10 -left-10"></div>

            <div className="absolute w-56 sm:w-72 h-56 sm:h-72 bg-blue-300/20 blur-3xl rounded-full bottom-0 right-0"></div>

            <div className="relative z-10">

              <p className="uppercase tracking-[3px] sm:tracking-[4px] text-xs sm:text-sm text-gray-600 mb-3">
                Get In Touch
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-5 sm:mb-6">
                We’d Love To Hear From You
              </h2>

              <p className="text-gray-600 leading-7 sm:leading-[32px] text-sm sm:text-base">
                Have questions or ideas? We are
                always ready to help you build
                modern digital solutions.
              </p>

              {/* INFO */}

              <div className="space-y-4 sm:space-y-5 mt-8 sm:mt-10">

                {[
                  {
                    icon: User,
                    label: "Full Name",
                    value: "Muntazir Mehdi",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value:
                      "muntazirma21@gmail.com",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+92 3045963153",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Pakistan",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 sm:gap-5 p-4 sm:p-5 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:scale-[1.02] transition-all duration-300"
                  >

                    <div className="p-3 rounded-2xl bg-white/20 shrink-0">

                      <item.icon size={20} />

                    </div>

                    <div className="min-w-0">

                      <p className="text-xs sm:text-sm text-gray-500">
                        {item.label}
                      </p>

                      <h3 className="text-sm sm:text-lg font-semibold break-words">
                        {item.value}
                      </h3>

                    </div>

                  </div>
                ))}

              </div>

              {/* SOCIAL */}

              <div className="flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10">

                <button className="p-4 rounded-2xl bg-white/10 border border-white/20 hover:bg-blue-500 hover:text-white transition-all duration-300">
                  <FaFacebookF />
                </button>

                <button className="p-4 rounded-2xl bg-white/10 border border-white/20 hover:bg-pink-500 hover:text-white transition-all duration-300">
                  <FaInstagram />
                </button>

                <button className="p-4 rounded-2xl bg-white/10 border border-white/20 hover:bg-black hover:text-white transition-all duration-300">
                  <FaGithub />
                </button>

              </div>

            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="bg-white/60 backdrop-blur-xl border border-white/30 rounded-[30px] sm:rounded-[40px] shadow-2xl p-6 sm:p-10 lg:p-14">

            <p className="uppercase tracking-[3px] sm:tracking-[4px] text-xs sm:text-sm text-orange-500 font-semibold mb-3">
              Send Message
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-5 sm:mb-6">
              Contact Form
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 sm:space-y-6"
            >

              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                onChange={handleChange}
                className="w-full p-4 sm:p-5 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-orange-400 text-sm sm:text-base"
              />

              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                onChange={handleChange}
                className="w-full p-4 sm:p-5 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-orange-400 text-sm sm:text-base"
              />

              <input
                type="text"
                name="phone"
                placeholder="Enter Phone Number"
                onChange={handleChange}
                className="w-full p-4 sm:p-5 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-orange-400 text-sm sm:text-base"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Write Your Message..."
                onChange={handleChange}
                className="w-full p-4 sm:p-5 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-orange-400 resize-none text-sm sm:text-base"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 sm:py-5 rounded-2xl font-semibold text-base sm:text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02]"
              >

                <Send size={20} />

                Send Message

              </button>

            </form>

            {/* FEATURES */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-10 sm:mt-12">

              {[
                {
                  icon: Clock3,
                  title: "Fast Reply",
                },
                {
                  icon: ShieldCheck,
                  title: "Secure Contact",
                },
                {
                  icon: Headphones,
                  title: "24/7 Support",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="text-center p-5 sm:p-6 rounded-3xl bg-white/40 border border-white/30 hover:shadow-xl transition-all duration-300"
                >

                  <item.icon
                    className="mx-auto text-orange-500 mb-3"
                    size={30}
                  />

                  <h3 className="font-bold text-sm sm:text-base">
                    {item.title}
                  </h3>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;