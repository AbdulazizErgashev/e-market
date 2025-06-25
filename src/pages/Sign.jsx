import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex items-center justify-center py-20 px-4">
      <div className="max-w-sm w-full">
        <motion.h1
          className="text-4xl font-extrabold text-center text-indigo-400 mb-4"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Sign Up
        </motion.h1>
        <motion.p
          className="text-center text-gray-300 text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Create your account to start your journey with us.
        </motion.p>

        <motion.form
          className="bg-gray-800 rounded-2xl p-8 space-y-5 shadow-lg hover:shadow-2xl transition"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div>
            <label className="block text-gray-300 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-3 rounded-xl border border-gray-600 bg-gray-700 text-gray-100 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-xl border border-gray-600 bg-gray-700 text-gray-100 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full p-3 rounded-xl border border-gray-600 bg-gray-700 text-gray-100 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full p-3 rounded-xl border border-gray-600 bg-gray-700 text-gray-100 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-500 text-gray-100 font-bold rounded-xl py-3 w-full hover:bg-indigo-600 hover:text-gray-100 transition text-lg"
          >
            Sign Up
          </button>
        </motion.form>

        <p className="text-center text-gray-300 mt-6">
          Already have an account?
          <Link
            to="/login"
            className="text-indigo-400 hover:underline font-semibold"
          >
            {" "}
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
