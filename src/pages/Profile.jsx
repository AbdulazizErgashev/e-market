import { motion } from "framer-motion";

export default function Profile() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white px-4">
      <motion.div
        className="bg-gray-800 rounded-2xl shadow-2xl p-10 max-w-sm w-full"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-3xl font-bold text-center text-teal-400 mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Welcome, user.email
        </motion.h2>

        <motion.p
          className="text-gray-300 text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          You are successfully logged in.
        </motion.p>

        <motion.button
          className="w-full bg-teal-500 hover:bg-teal-600 text-gray-900 font-semibold py-3 rounded-xl transition"
          whileHover={{ scale: 1.05 }}
        >
          Logout
        </motion.button>
      </motion.div>
    </div>
  );
}
