import React, { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  UserPlus,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  // ================= HANDLE CHANGE =================
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ================= SUBMIT =================
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.password
    ) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      alert("Account Created Successfully 🎉");

      navigate("/product");
    }, 1200);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-yellow-50 px-4 sm:px-6 py-8 overflow-hidden relative">

      {/* BACKGROUND BLUR */}
      <div className="absolute top-[-120px] left-[-120px] w-[260px] sm:w-[400px] h-[260px] sm:h-[400px] bg-orange-300/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[260px] sm:w-[400px] h-[260px] sm:h-[400px] bg-yellow-300/20 blur-[120px] rounded-full"></div>

      {/* CARD */}
      <div className="relative z-10 w-full max-w-md bg-white/80 backdrop-blur-2xl rounded-[25px] sm:rounded-[35px] shadow-2xl border border-white p-5 sm:p-8 md:p-10">

        {/* HEADER */}
        <div className="text-center mb-6 sm:mb-8">

          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 flex items-center justify-center shadow-xl">

            <UserPlus
              className="text-white"
              size={30}
            />

          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-5 text-gray-900 leading-tight">
            Create Account
          </h2>

          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Join E-Tech today
          </p>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* NAME */}
          <div>

            <label className="font-semibold text-gray-700 text-sm sm:text-base">
              Full Name
            </label>

            <div className="mt-2 flex items-center bg-gray-100 rounded-2xl px-4 py-3 sm:py-4 border focus-within:border-orange-500 transition">

              <User
                size={18}
                className="text-orange-500 shrink-0"
              />

              <input
                type="text"
                name="name"
                placeholder="Enter name"
                className="bg-transparent outline-none w-full px-3 text-sm sm:text-base"
                value={form.name}
                onChange={handleChange}
              />

            </div>

          </div>

          {/* EMAIL */}
          <div>

            <label className="font-semibold text-gray-700 text-sm sm:text-base">
              Email
            </label>

            <div className="mt-2 flex items-center bg-gray-100 rounded-2xl px-4 py-3 sm:py-4 border focus-within:border-orange-500 transition">

              <Mail
                size={18}
                className="text-orange-500 shrink-0"
              />

              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="bg-transparent outline-none w-full px-3 text-sm sm:text-base"
                value={form.email}
                onChange={handleChange}
              />

            </div>

          </div>

          {/* PASSWORD */}
          <div>

            <label className="font-semibold text-gray-700 text-sm sm:text-base">
              Password
            </label>

            <div className="mt-2 flex items-center bg-gray-100 rounded-2xl px-4 py-3 sm:py-4 border focus-within:border-orange-500 transition">

              <Lock
                size={18}
                className="text-orange-500 shrink-0"
              />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                placeholder="Create password"
                className="bg-transparent outline-none w-full px-3 text-sm sm:text-base"
                value={form.password}
                onChange={handleChange}
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="text-gray-500 hover:text-orange-500 transition"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>

            </div>

          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white py-3 sm:py-4 rounded-2xl font-bold text-sm sm:text-base shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-60"
          >
            {loading
              ? "Creating..."
              : "Create Account"}
          </button>

        </form>

        {/* FOOTER */}
        <p className="text-center text-gray-600 mt-6 text-sm sm:text-base leading-7">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-orange-500 font-bold hover:text-orange-600 transition"
          >
            Sign In
          </Link>

        </p>

      </div>

    </section>
  );
}

export default Register;