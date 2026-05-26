import React, { useState } from "react";
import { useCart } from "../Context/CartContext";
// ===========================================
// INSIDE HEADER.jsx
// ADD THIS IMPORT
// ===========================================

import HeaderCart from "./HeaderCart";

import "../Header.css";

import {
  Heart,
  ShoppingCart,
  Search,
  Moon,
  Sun,
  Menu,
} from "lucide-react";

import { Link } from "react-router-dom";

function Header() {

  const { cartCount } = useCart();

  const [darkMode, setDarkMode] =
    useState(false);

  const [menuOpen, setMenuOpen] =
    useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const newMode = !prev;

      if (newMode) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove(
          "dark"
        );
      }

      return newMode;
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/80 border-b border-gray-200 shadow-sm">

      {/* ================= TOP NAVBAR ================= */}

      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        <div className="flex items-center justify-between h-[75px]">

          {/* ================= LOGO ================= */}

          <Link
            to="/"
            className="flex flex-col leading-tight"
          >
            <h1 className="text-2xl font-black text-black tracking-wide">
              E-Tech
            </h1>

            <span className="text-[11px] text-orange-500 font-semibold tracking-[2px] uppercase">
              Store
            </span>
          </Link>

          {/* ================= SEARCH ================= */}

          <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-3 w-[320px] border border-gray-200 focus-within:border-orange-400 transition-all duration-300">

            <Search
              size={18}
              className="text-gray-500"
            />

            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none px-3 text-sm w-full"
            />
          </div>

          {/* ================= NAV LINKS ================= */}

          <ul className="hidden lg:flex items-center gap-7">

            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-orange-500 font-semibold transition-all duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-orange-500 font-semibold transition-all duration-300"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/product"
                className="text-gray-700 hover:text-orange-500 font-semibold transition-all duration-300"
              >
                Product
              </Link>
            </li>

            <li>
              <Link
                to="/blog"
                className="text-gray-700 hover:text-orange-500 font-semibold transition-all duration-300"
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-orange-500 font-semibold transition-all duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* ================= ACTION BUTTONS ================= */}

          <div className="flex items-center gap-3">

            {/* HEART */}
            <button className="w-11 h-11 rounded-full bg-gray-100 hover:bg-orange-100 flex items-center justify-center transition-all duration-300">
              <Heart
                size={20}
                className="text-red-500"
              />
            </button>

            {/* CART */}
            <Link to="/cart" className="relative w-11 h-11 rounded-full bg-gray-100 hover:bg-orange-100 flex items-center justify-center transition-all duration-300">

  <ShoppingCart
    size={20}
    className="text-black"
  />

  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-orange-500 text-white text-[10px] flex items-center justify-center font-bold">

    {cartCount}

  </span>

</Link>

            {/* THEME */}
            <button
              onClick={toggleTheme}
              className="w-11 h-11 rounded-full bg-gray-100 hover:bg-orange-100 flex items-center justify-center transition-all duration-300"
            >
              {darkMode ? (
                <Sun
                  size={20}
                  className="text-yellow-500"
                />
              ) : (
                <Moon
                  size={20}
                  className="text-black"
                />
              )}
            </button>

            {/* LOGIN */}
            <Link to="/login"className="hidden md:flex bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105">
            Login
            </Link>

            {/* MOBILE MENU */}
            <button
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
              className="lg:hidden w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">

          <div className="px-6 py-5">

            {/* SEARCH */}
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-3 mb-5">

              <Search
                size={18}
                className="text-gray-500"
              />

              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none px-3 text-sm w-full"
              />
            </div>

            {/* LINKS */}
            <ul className="flex flex-col gap-5">

              <li>
                <Link
                  to="/"
                  className="font-semibold text-gray-700 hover:text-orange-500"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="font-semibold text-gray-700 hover:text-orange-500"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/product"
                  className="font-semibold text-gray-700 hover:text-orange-500"
                >
                  Product
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className="font-semibold text-gray-700 hover:text-orange-500"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="font-semibold text-gray-700 hover:text-orange-500"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <Link to="/login" className="block text-center w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold transition-all duration-300">
            Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;