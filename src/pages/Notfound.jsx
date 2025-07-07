import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex flex-col justify-center items-center px-4 py-28">
      <motion.h1
        className="text-7xl font-extrabold text-teal-500 mb-4  text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        404
      </motion.h1>

      <motion.h1
        className="text-3xl font-bold text-gray-300 mb-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Oops! Page Not Found
      </motion.h1>

      <motion.p
        className="text-center max-w-xl text-gray-400 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        The page you're looking for doesn't exist or has been moved. Don't
        worry, you can always head back to the homepage.
      </motion.p>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <Link
          to={"/"}
          className="bg-teal-500 text-gray-900 font-bold px-6 py-3 rounded-full hover:bg-teal-600 transition-all text-lg"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
}
