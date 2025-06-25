import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../toolkit/app/auth/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { email };

    dispatch(login({ user, remember: rememberMe }));

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex items-center justify-center py-20 px-4">
      <div className="max-w-sm w-full">
        <motion.h1
          className="text-4xl font-extrabold text-center text-teal-400 mb-4"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Login
        </motion.h1>
        <motion.p
          className="text-lg text-center text-gray-300 mb-8"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Welcome back! Please enter your details to sign in.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-gray-800 rounded-2xl p-8 space-y-5 shadow-lg hover:shadow-2xl transition"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div>
            <label className="block text-gray-300 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-600 bg-gray-700 text-gray-100 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-600 bg-gray-700 text-gray-100 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-gray-300">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2 rounded-2xl focus:ring-2 focus:ring-teal-500"
              />{" "}
              Remember me
            </label>{" "}
            <a href="#" className="text-teal-400 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="bg-teal-500 text-gray-900 font-bold rounded-xl py-3 w-full hover:bg-teal-600 hover:text-gray-100 transition text-lg"
          >
            Login
          </button>
        </motion.form>

        <p className="text-center text-gray-300 mt-6">
          Don't have an account?
          <Link
            to={"/sign"}
            className="text-teal-400 hover:underline font-semibold"
          >
            {" "}
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
