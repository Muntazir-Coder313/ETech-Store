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
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
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

    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Account Created Successfully 🎉");

      // 👉 GO TO PRODUCT PAGE
      navigate("/product");
    }, 1200);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-yellow-50 px-6">

      <div className="w-full max-w-md bg-white/80 backdrop-blur-2xl rounded-[30px] shadow-2xl border border-white p-8">

        {/* HEADER */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 flex items-center justify-center">
            <UserPlus className="text-white" size={34} />
          </div>

          <h2 className="text-4xl font-black mt-5">Create Account</h2>
          <p className="text-gray-500 mt-2">Join E-Tech today</p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* NAME */}
          <div>
            <label className="font-semibold text-gray-700">Full Name</label>
            <div className="mt-2 flex items-center bg-gray-100 rounded-xl px-4 py-3 border">
              <User size={18} className="text-orange-500" />
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                className="bg-transparent outline-none w-full px-3"
                value={form.name}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* EMAIL */}
          <div>
            <label className="font-semibold text-gray-700">Email</label>
            <div className="mt-2 flex items-center bg-gray-100 rounded-xl px-4 py-3 border">
              <Mail size={18} className="text-orange-500" />
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="bg-transparent outline-none w-full px-3"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label className="font-semibold text-gray-700">Password</label>
            <div className="mt-2 flex items-center bg-gray-100 rounded-xl px-4 py-3 border">

              <Lock size={18} className="text-orange-500" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create password"
                className="bg-transparent outline-none w-full px-3"
                value={form.password}
                onChange={handleChange}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>

            </div>
          </div>

          {/* BUTTON */}
          <button
            disabled={loading}
            className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-3 rounded-xl font-bold shadow-lg transition-all disabled:opacity-60"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        {/* FOOTER */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-500 font-bold">
            Sign In
          </Link>
        </p>

      </div>
    </section>
  );
}

export default Register;