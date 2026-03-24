import { motion } from "framer-motion";

export default function BlurOverlay() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
    >
      {/* Background Blur */}
      <div className="absolute inset-0 backdrop-blur-2xl bg-white/40"></div>   

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center px-6 py-10 rounded-3xl bg-white/70 shadow-xl backdrop-blur-md"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          🚧 Website Under Development
        </h1>

        <p className="text-gray-600 mb-6">
          We're working hard to bring this experience live. Stay connected!
        </p>

        <a
          href="mailto:bhavthedev@proton.me"
          className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold shadow-md hover:scale-105 transition"
        >
          Contact Us
        </a>
      </motion.div>
    </motion.div>
  );
}