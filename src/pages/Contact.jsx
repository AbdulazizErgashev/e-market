import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 py-28 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl font-extrabold text-center text-teal-400 mb-4"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-lg text-center max-w-2xl mx-auto text-gray-300 mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, duration: 1 }}
        >
          Get questions? Need help with an order? Our team is here for you -
          we're just a message away.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            className="bg-gray-800 rounded-2xl p-8 space-y-6 shadow-lg hover:shadow-2xl transition"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, duration: 1 }}
          >
            <h1 className="text-3xl font-bold text-teal-400">Get in Touch</h1>
            <p>
              Email:
              <span className="text-gray-300"> support@yourcommerce.com</span>
            </p>
            <p>
              Phone:
              <span className="text-gray-300"> +998 93 908 03 35</span>
            </p>
            <p>
              Location:
              <span className="text-gray-300">
                {" "}
                123 E-commerce Street, New York, NY
              </span>
            </p>
            <p className="text-gray-400">
              Our team is available{" "}
              <span className="text-gray-300">Mon-Fri, 9 A.M-5 P.M</span>. We'll
              get back to you as soon as possible!
            </p>
          </motion.div>

          <motion.form
            className="bg-gray-800 rounded-2xl p-8 space-y-5 shadow-lg hover:shadow-2xl transition"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, duration: 1 }}
          >
            <h1 className="text-3xl font-bold text-teal-400">Send a Message</h1>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-xl border border-gray-600 bg-gray-700 text-gray-100 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-xl border border-gray-600 bg-gray-700 text-gray-100 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 rounded-xl border border-gray-600 bg-gray-700 text-gray-100 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="submit"
              className="w-full bg-teal-500 text-gray-900 font-bold rounded-xl py-3 hover:bg-teal-600 transition-all text-lg"
            >
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
