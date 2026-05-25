// import React, { useState } from "react";
// import {
//   Mail,
//   Lock,
//   Eye,
//   EyeOff,
//   LogIn,
// } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!form.email || !form.password) {
//       alert("Please fill all fields");
//       return;
//     }

//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false);
//       alert("Login Successful ✅");

//       // 👉 GO TO PRODUCT PAGE
//       navigate("/product");
//     }, 1200);
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-yellow-50 px-6">

//       <div className="w-full max-w-md bg-white/80 backdrop-blur-2xl rounded-[30px] shadow-2xl border border-white p-8">

//         {/* HEADER */}
//         <div className="text-center mb-8">
//           <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 flex items-center justify-center">
//             <LogIn className="text-white" size={34} />
//           </div>

//           <h2 className="text-4xl font-black mt-5">Welcome Back</h2>
//           <p className="text-gray-500 mt-2">Login to continue</p>
//         </div>

//         {/* FORM */}
//         <form onSubmit={handleSubmit} className="space-y-5">

//           {/* EMAIL */}
//           <div>
//             <label className="font-semibold text-gray-700">Email</label>
//             <div className="mt-2 flex items-center bg-gray-100 rounded-xl px-4 py-3 border">
//               <Mail size={18} className="text-orange-500" />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter email"
//                 className="bg-transparent outline-none w-full px-3"
//                 value={form.email}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           {/* PASSWORD */}
//           <div>
//             <label className="font-semibold text-gray-700">Password</label>
//             <div className="mt-2 flex items-center bg-gray-100 rounded-xl px-4 py-3 border">

//               <Lock size={18} className="text-orange-500" />

//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Enter password"
//                 className="bg-transparent outline-none w-full px-3"
//                 value={form.password}
//                 onChange={handleChange}
//               />

//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//               </button>

//             </div>
//           </div>

//           {/* BUTTON */}
//           <button
//             disabled={loading}
//             className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-3 rounded-xl font-bold shadow-lg transition-all disabled:opacity-60"
//           >
//             {loading ? "Logging in..." : "Sign In"}
//           </button>
//         </form>

//         {/* FOOTER */}
//         <p className="text-center text-gray-600 mt-6">
//           Don’t have an account?{" "}
//           <Link to="/register" className="text-orange-500 font-bold">
//             Sign Up
//           </Link>
//         </p>

//       </div>
//     </section>
//   );
// }

// export default Login;



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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-yellow-50 px-6">

      <div className="w-full max-w-md bg-white/80 backdrop-blur-2xl rounded-[30px] shadow-2xl border border-white p-8">

        {/* HEADER */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 flex items-center justify-center">
            <LogIn className="text-white" size={34} />
          </div>

          <h2 className="text-4xl font-black mt-5">Welcome Back</h2>
          <p className="text-gray-500 mt-2">Login to continue</p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">

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
                placeholder="Enter password"
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
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-3 rounded-xl font-bold shadow-lg transition-all disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Sign In"}
          </button>

          {/* ================= SOCIAL LOGIN ================= */}
          <div className="mt-6">

            {/* Divider */}
            <div className="flex items-center gap-4 my-5">
              <div className="h-px bg-gray-200 flex-1"></div>
              <span className="text-xs text-gray-400 font-semibold">
                OR CONTINUE WITH
              </span>
              <div className="h-px bg-gray-200 flex-1"></div>
            </div>

            {/* Google */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border bg-white hover:bg-gray-50 transition"
              onClick={() => alert("Google Login clicked")}
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

            {/* Apple */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border bg-black hover:opacity-90 transition mt-3"
              onClick={() => alert("Apple Login clicked")}
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
        <p className="text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-orange-500 font-bold">
            Sign Up
          </Link>
        </p>

      </div>
    </section>
  );
}

export default Login;