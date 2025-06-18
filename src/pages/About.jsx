import { motion } from "framer-motion";
import { aboutUs, teamMembers } from "../data/db";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-28 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl font-extrabold mb-6 text-center text-teal-500"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h1>

        <motion.p
          className="text-lg mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          We are a modern e-commerce company focused on delivering high-quality
          products and exceptional user experiences. Innovation, customer
          satisfaction, and fast delivery are our top priorities.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.img
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=1447&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team"
            className="rounded-2xl shadow-xl w-full object-cover"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          />

          <motion.div
            className="space-y-4"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-teal-500">Our Mission</h2>
            <p>
              Our mission is to build a seamless online shopping experience for
              everyone. We aim to lead the market with innovative solutions and
              outstanding service.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Cutting-edge technology</li>
              <li>Customer-centric approach</li>
              <li>Fast & reliable delivery</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          {aboutUs.map((data) => (
            <div
              key={data.id}
              className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-teal-500">
                {data.title}
              </h3>
              <p>{data.description}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-10"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-gray-800 rounded-2xl">
              <div className="h-72">
                <img
                  src={member.img}
                  className="w-full h-full object-cover  rounded-t-2xl"
                />
              </div>
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="p-10 flex flex-col items-center gap-3 "
              >
                <h1 className="text-teal-500 text-2xl font-bold">
                  {member.name}
                </h1>
                <p className="text-white font-semibold">{member.position}</p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
