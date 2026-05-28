import React, { useEffect, useState } from "react";
import AboutImg from "../Img/About Me.jpg";

import {
  ShieldCheck,
  Globe,
  Rocket,
  Headphones,
  Sparkles,
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
    <div className="bg-[#f8f5f0] min-h-screen overflow-x-hidden">

      {/* ================= HERO ================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* IMAGE */}
          <div className="relative order-1">

            <div className="absolute -inset-3 sm:-inset-4 lg:-inset-6 bg-orange-400/20 blur-3xl rounded-[30px] sm:rounded-[40px]"></div>

            <img
              src={AboutImg}
              alt="About"
              className="relative w-full h-[320px] sm:h-[450px] md:h-[550px] lg:h-[650px] object-cover rounded-[30px] sm:rounded-[40px] shadow-2xl hover:scale-[1.02] transition duration-500"
            />
          </div>

          {/* TEXT */}
          <div className="order-2 text-center lg:text-left">

            <p className="uppercase tracking-[3px] sm:tracking-[5px] lg:tracking-[6px] text-orange-500 font-semibold mb-4 sm:mb-5 flex items-center justify-center lg:justify-start gap-2 text-sm sm:text-base">
              <Sparkles size={18} />
              Premium Ecommerce Platform
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
              Building Modern Digital Shopping Experiences
            </h1>

            <p className="text-gray-600 mt-6 sm:mt-8 leading-[30px] sm:leading-[34px] text-base sm:text-lg">
              We create high-performance ecommerce websites with modern UI/UX,
              secure checkout systems, and scalable React-based architecture.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10 justify-center lg:justify-start">

              <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold shadow-lg transition">
                Explore Services
              </button>

              <button className="w-full sm:w-auto border border-gray-300 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-black hover:text-white transition">
                Contact Us
              </button>

            </div>
          </div>

        </div>
      </section>

      {/* ================= FEATURES + TESTIMONIALS ================= */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20 lg:pb-24">

        {/* TITLE */}
        <div className="text-center mb-12 sm:mb-16">

          <p className="uppercase tracking-[3px] sm:tracking-[5px] text-orange-500 font-semibold text-sm sm:text-base">
            Why Choose Us
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3 sm:mt-4 text-gray-900 leading-tight">
            Features & Client Testimonials
          </h2>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

          {/* LEFT: FEATURES SLIDER */}
          <div className="relative bg-white rounded-[25px] sm:rounded-[35px] shadow-2xl p-6 sm:p-8 lg:p-10 overflow-hidden">

            <div className="text-center mb-6 sm:mb-8">

              <h3 className="text-2xl sm:text-3xl font-black">
                Ecommerce Features
              </h3>

              <p className="text-gray-500 mt-2 text-sm sm:text-base">
                Professional system capabilities
              </p>

            </div>

            {/* CARD */}
            <div className="text-center">

              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-orange-100 flex items-center justify-center mb-5 sm:mb-6">
                {React.createElement(features[index].icon, {
                  size: 32,
                  className: "text-orange-500",
                })}
              </div>

              <h4 className="text-xl sm:text-2xl font-black mb-3">
                {features[index].title}
              </h4>

              <p className="text-gray-600 leading-[28px] sm:leading-[30px] text-sm sm:text-base">
                {features[index].desc}
              </p>

            </div>

            {/* NAV */}
            <div className="flex justify-between mt-8 sm:mt-10">

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
            <div className="flex justify-center gap-2 mt-5 sm:mt-6">

              {features.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index
                      ? "bg-orange-500 w-6"
                      : "bg-gray-300 w-2"
                  }`}
                />
              ))}

            </div>
          </div>

          {/* RIGHT: TESTIMONIALS */}
          <div className="space-y-5 sm:space-y-6">

            {testimonials.map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-white to-orange-50 p-5 sm:p-6 lg:p-8 rounded-[25px] sm:rounded-[30px] shadow-lg hover:-translate-y-2 transition duration-300"
              >

                <div className="flex items-center gap-3 mb-4 flex-wrap">

                  <Quote className="text-orange-500" />

                  <div className="flex text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>

                </div>

                <p className="text-gray-600 leading-[28px] sm:leading-[30px] text-sm sm:text-base">
                  "{item.text}"
                </p>

                <h4 className="mt-4 sm:mt-5 font-black text-base sm:text-lg">
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