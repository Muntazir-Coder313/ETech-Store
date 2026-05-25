import React, { useState } from "react";

import ContactBanner from "../Img/Contact Img.jpg";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

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
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#fdf2f8] to-[#f0f9ff]">

      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={ContactBanner}
          alt="Contact Banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <p className="uppercase tracking-[5px] text-orange-400 font-semibold mb-4">
            Contact Us
          </p>

          <h1 className="text-5xl md:text-7xl font-black max-w-[900px] leading-tight">
            Let’s Create Something Amazing Together
          </h1>

          <p className="text-lg text-gray-200 mt-6 max-w-[700px] leading-[35px]">
            We build modern ecommerce experiences with clean UI,
            performance-focused React apps and scalable solutions.
          </p>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* ================= LEFT SIDE (GLASS STYLE ONLY) ================= */}
          <div className="rounded-[40px] p-10 lg:p-14 text-gray-900 relative overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl">

            <div className="absolute w-72 h-72 bg-pink-300/20 blur-3xl rounded-full -top-10 -left-10"></div>
            <div className="absolute w-72 h-72 bg-blue-300/20 blur-3xl rounded-full bottom-0 right-0"></div>

            <div className="relative z-10">

              <p className="uppercase tracking-[4px] text-sm text-gray-600 mb-3">
                Get In Touch
              </p>

              <h2 className="text-5xl font-black leading-tight mb-6">
                We’d Love To Hear From You
              </h2>

              <p className="text-gray-600 leading-[32px]">
                Have questions or ideas? We are always ready to help
                you build modern digital solutions.
              </p>

              {/* INFO (NO WHITE BACKGROUND BOXES) */}
              <div className="space-y-5 mt-10">

                {[
                  { icon: User, label: "Full Name", value: "Muntazir Mehdi" },
                  { icon: Mail, label: "Email", value: "muntazirma21@gmail.com" },
                  { icon: Phone, label: "Phone", value: "+92 3045963153" },
                  { icon: MapPin, label: "Location", value: "Pakistan" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-5 p-5 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:scale-[1.02] transition"
                  >
                    <div className="p-3 rounded-2xl bg-white/20">
                      <item.icon size={22} />
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">
                        {item.label}
                      </p>
                      <h3 className="text-lg font-semibold">
                        {item.value}
                      </h3>
                    </div>
                  </div>
                ))}

              </div>

              {/* SOCIAL */}
              <div className="flex gap-4 mt-10">

                <button className="p-4 rounded-2xl bg-white/10 border border-white/20 hover:bg-blue-500 hover:text-white transition">
                  <FaFacebookF />
                </button>

                <button className="p-4 rounded-2xl bg-white/10 border border-white/20 hover:bg-pink-500 hover:text-white transition">
                  <FaInstagram />
                </button>

                <button className="p-4 rounded-2xl bg-white/10 border border-white/20 hover:bg-black hover:text-white transition">
                  <FaGithub />
                </button>

              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE (FORM CLEAN) ================= */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/30 rounded-[40px] shadow-2xl p-10 lg:p-14">

            <p className="uppercase tracking-[4px] text-sm text-orange-500 font-semibold mb-3">
              Send Message
            </p>

            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Contact Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                onChange={handleChange}
                className="w-full p-5 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-orange-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                onChange={handleChange}
                className="w-full p-5 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-orange-400"
              />

              <input
                type="text"
                name="phone"
                placeholder="Enter Phone Number"
                onChange={handleChange}
                className="w-full p-5 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-orange-400"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Write Your Message..."
                onChange={handleChange}
                className="w-full p-5 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-orange-400 resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-5 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3"
              >
                <Send size={20} />
                Send Message
              </button>

            </form>

            {/* FEATURES */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">

              {[
                { icon: Clock3, title: "Fast Reply" },
                { icon: ShieldCheck, title: "Secure Contact" },
                { icon: Headphones, title: "24/7 Support" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="text-center p-6 rounded-3xl bg-white/40 border border-white/30"
                >
                  <item.icon
                    className="mx-auto text-orange-500 mb-3"
                    size={32}
                  />
                  <h3 className="font-bold">{item.title}</h3>
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