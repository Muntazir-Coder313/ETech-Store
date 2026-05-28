import React, { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogIn,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Login Successful ✅");
      navigate("/product");
    }, 1200);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-yellow-50 px-4 sm:px-6 py-10 relative overflow-hidden">

      {/* BACKGROUND EFFECT */}
      <div className="absolute top-[-120px] left-[-120px] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-orange-300/20 blur-[100px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-yellow-300/20 blur-[100px] rounded-full"></div>

      {/* LOGIN CARD */}
      <div className="relative z-10 w-full max-w-md bg-white/80 backdrop-blur-2xl rounded-[25px] sm:rounded-[35px] shadow-2xl border border-white p-5 sm:p-8">

        {/* HEADER */}
        <div className="text-center mb-7 sm:mb-8">

          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 flex items-center justify-center shadow-xl">
            <LogIn
              className="text-white"
              size={28}
            />
          </div>

          <h2 className="text-3xl sm:text-4xl font-black mt-5 text-gray-900">
            Welcome Back
          </h2>

          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Login to continue
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* EMAIL */}
          <div>
            <label className="font-semibold text-gray-700 text-sm sm:text-base">
              Email
            </label>

            <div className="mt-2 flex items-center bg-gray-100 rounded-xl px-4 py-3 border focus-within:border-orange-400 transition-all">

              <Mail
                size={18}
                className="text-orange-500 min-w-[18px]"
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

            <div className="mt-2 flex items-center bg-gray-100 rounded-xl px-4 py-3 border focus-within:border-orange-400 transition-all">

              <Lock
                size={18}
                className="text-orange-500 min-w-[18px]"
              />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                placeholder="Enter password"
                className="bg-transparent outline-none w-full px-3 text-sm sm:text-base"
                value={form.password}
                onChange={handleChange}
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
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
            className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-3 sm:py-4 rounded-xl font-bold shadow-lg hover:scale-[1.02] transition-all disabled:opacity-60 text-sm sm:text-base"
          >
            {loading
              ? "Logging in..."
              : "Sign In"}
          </button>

          {/* SOCIAL LOGIN */}
          <div className="mt-6">

            {/* DIVIDER */}
            <div className="flex items-center gap-4 my-5">

              <div className="h-px bg-gray-200 flex-1"></div>

              <span className="text-[10px] sm:text-xs text-gray-400 font-semibold whitespace-nowrap">
                OR CONTINUE WITH
              </span>

              <div className="h-px bg-gray-200 flex-1"></div>
            </div>

            {/* GOOGLE */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border bg-white hover:bg-gray-50 transition text-sm sm:text-base"
              onClick={() =>
                alert(
                  "Google Login clicked"
                )
              }
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />

              <span className="font-semibold text-gray-700">
                Continue with Google
              </span>
            </button>

            {/* APPLE */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border bg-black hover:opacity-90 transition mt-3 text-sm sm:text-base"
              onClick={() =>
                alert(
                  "Apple Login clicked"
                )
              }
            >
              <img
                src="https://www.svgrepo.com/show/475647/apple-logo.svg"
                alt="Apple"
                className="w-5 h-5 invert"
              />

              <span className="font-semibold text-white">
                Continue with Apple
              </span>
            </button>

          </div>

        </form>

        {/* FOOTER */}
        <p className="text-center text-gray-600 mt-6 text-sm sm:text-base">
          Don’t have an account?{" "}

          <Link
            to="/register"
            className="text-orange-500 font-bold hover:text-orange-600 transition"
          >
            Sign Up
          </Link>
        </p>

      </div>
    </section>
  );
}

export default Login;