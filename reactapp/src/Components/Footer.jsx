import React from "react";
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-[#070b14] text-white overflow-hidden mt-24">

      {/* 🌈 background gradient glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-14 relative z-10">

        {/* BRAND */}
        <div className="space-y-5">

          <h2 className="text-4xl font-black bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            E-Tech
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            Premium modern ecommerce experience built with React & Tailwind CSS.
            Fast, responsive, and production-ready UI system.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-3 pt-2">

            {[FaFacebookF, FaInstagram, FaGithub, FaTwitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-orange-500/20 hover:scale-110 transition-all duration-300 border border-white/10"
              >
                <Icon size={16} />
              </a>
            ))}

          </div>

        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-white">
            Quick Links
          </h3>

          <ul className="space-y-4 text-gray-400">
            {[
              ["Home", "/"],
              ["Products", "/product"],
              ["About", "/about"],
              ["Blog", "/blog"],
              ["Contact", "/contact"],
            ].map(([name, path]) => (
              <li key={name}>
                <Link
                  to={path}
                  className="hover:text-orange-400 transition-all"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-lg font-bold mb-6">Support</h3>

          <ul className="space-y-4 text-gray-400">
            {[
              "Help Center",
              "Privacy Policy",
              "Terms & Conditions",
              "Shipping Info",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-white cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-bold mb-6">Contact</h3>

          <div className="space-y-5 text-gray-400">

            <div className="flex items-center gap-3">
              <Mail className="text-orange-400" size={18} />
              <span className="text-sm">
                muntazirma21@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-orange-400" size={18} />
              <span className="text-sm">
                +92 3045963153
              </span>
            </div>

          </div>

          {/* NEWSLETTER */}
          <div className="mt-6 flex rounded-2xl overflow-hidden border border-white/10 shadow-lg">

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 text-black outline-none"
            />

            <button className="bg-gradient-to-r from-orange-500 to-pink-500 px-5 font-bold hover:opacity-90 transition">
              Join
            </button>

          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 text-center text-gray-500 text-sm relative z-10">

        © 2026 E-Tech Store | Built by{" "}

        <span className="text-orange-400 font-bold">
          Muntazir Mehdi
        </span>

      </div>

    </footer>
  );
}

export default Footer;