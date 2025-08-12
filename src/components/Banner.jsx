import React from "react";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div className="w-full mt-6">
      <div className="flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg m-6">
        
        {/* Left side - animated text & fingerprint */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-[#214e34] text-white flex flex-col justify-center px-6 py-8 md:w-1/2 relative overflow-hidden"
        >
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight z-10">
            Hire for what’s next.
          </h2>
          <p className="mt-4 text-sm sm:text-lg opacity-90 z-10">
            Discover the right talent for your next big step. Build the future with us.
          </p>

          {/* Animated fingerprint background */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="absolute bottom-0 left-0 opacity-20 w-full h-full pointer-events-none"
          >
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Right side - animated waves */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 h-64 md:h-auto bg-gradient-to-br from-green-100 to-green-300 relative flex items-center justify-center"
        >
          {/* Animated wave shapes */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            className="absolute bottom-0 w-full h-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <path
              d="M0,50 C150,150 350,0 500,100 L500,150 L0,150 Z"
              fill="rgba(33, 78, 52, 0.3)"
            />
          </motion.svg>

          {/* Floating circles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-8 h-8 bg-green-500 rounded-full absolute"
              style={{
                top: `${30 + i * 20}%`,
                left: `${20 + i * 25}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                repeat: Infinity,
                duration: 3 + i,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
