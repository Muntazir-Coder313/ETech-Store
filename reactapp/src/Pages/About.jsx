import React, { useEffect, useState } from "react";
import AboutImg from "../Img/About Me.jpg";

import {
  ShieldCheck,
  Globe,
  Rocket,
  Headphones,
  Sparkles,
  Truck,
  BadgeCheck,
  CreditCard,
  RefreshCcw,
  Quote,
  Star,
} from "lucide-react";

function About() {
  // ================= CAROUSEL STATE =================

  const [index, setIndex] = useState(0);

  const features = [
    {
      icon: Rocket,
      title: "Lightning Fast Performance",
      desc: "Optimized ecommerce systems with modern React architecture.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Checkout System",
      desc: "Encrypted payments and trusted transaction flow.",
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      desc: "Fully responsive design for all devices worldwide.",
    },
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      desc: "Always available support for customers and sellers.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Amazing shopping experience. Fast, secure, and very modern UI design!",
    },
    {
      name: "David Smith",
      text: "One of the best ecommerce platforms I have used. Smooth and reliable.",
    },
    {
      name: "Emily Brown",
      text: "Beautiful design and excellent product quality. Highly recommended!",
    },
  ];

  const next = () => {
    setIndex((prev) => (prev + 1) % features.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? features.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#f8f5f0] min-h-screen overflow-hidden">

      {/* ================= HERO ================= */}

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <div className="relative">
            <div className="absolute -inset-6 bg-orange-400/20 blur-3xl rounded-[40px]"></div>

            <img
              src={AboutImg}
              alt="About"
              className="relative w-full h-[650px] object-cover rounded-[40px] shadow-2xl hover:scale-[1.02] transition duration-500"
            />
          </div>

          {/* TEXT */}
          <div>
            <p className="uppercase tracking-[6px] text-orange-500 font-semibold mb-5 flex items-center gap-2">
              <Sparkles size={18} />
              Premium Ecommerce Platform
            </p>

            <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
              Building Modern Digital Shopping Experiences
            </h1>

            <p className="text-gray-600 mt-8 leading-[34px] text-lg">
              We create high-performance ecommerce websites with modern UI/UX,
              secure checkout systems, and scalable React-based architecture.
            </p>

            <div className="flex gap-4 mt-10">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition">
                Explore Services
              </button>

              <button className="border border-gray-300 px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition">
                Contact Us
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FEATURES + TESTIMONIALS ================= */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        {/* TITLE */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-4 text-gray-900">
            Features & Client Testimonials
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT: FEATURES SLIDER */}
          <div className="relative bg-white rounded-[35px] shadow-2xl p-10 overflow-hidden">

            <div className="text-center mb-8">
              <h3 className="text-3xl font-black">
                Ecommerce Features
              </h3>
              <p className="text-gray-500 mt-2">
                Professional system capabilities
              </p>
            </div>

            {/* CARD */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-orange-100 flex items-center justify-center mb-6">
                {React.createElement(features[index].icon, {
                  size: 40,
                  className: "text-orange-500",
                })}
              </div>

              <h4 className="text-2xl font-black mb-3">
                {features[index].title}
              </h4>

              <p className="text-gray-600 leading-[30px]">
                {features[index].desc}
              </p>
            </div>

            {/* NAV */}
            <div className="flex justify-between mt-10">
              <button
                onClick={prev}
                className="bg-gray-100 hover:bg-orange-500 hover:text-white p-3 rounded-full transition"
              >
                ⬅
              </button>

              <button
                onClick={next}
                className="bg-gray-100 hover:bg-orange-500 hover:text-white p-3 rounded-full transition"
              >
                ➡
              </button>
            </div>

            {/* DOTS */}
            <div className="flex justify-center gap-2 mt-6">
              {features.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition ${
                    i === index
                      ? "bg-orange-500 w-6"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: TESTIMONIALS */}
          <div className="space-y-6">

            {testimonials.map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-[30px] shadow-lg hover:-translate-y-2 transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Quote className="text-orange-500" />

                  <div className="flex text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                </div>

                <p className="text-gray-600 leading-[30px]">
                  "{item.text}"
                </p>

                <h4 className="mt-5 font-black text-lg">
                  {item.name}
                </h4>
              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}

export default About;