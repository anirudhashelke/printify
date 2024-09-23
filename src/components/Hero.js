import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-blue-50 h-screen flex flex-col justify-center items-center text-center p-4 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
          Start Selling with Printify
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Create and sell custom products with ease.
        </p>
        <motion.button
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
          whileHover={{ scale: 1.1 }}
        >
          Get Started for Free
        </motion.button>
      </motion.div>

      <motion.img
        src="https://images.unsplash.com/photo-1523206489230-e10433f7da20?auto=format&fit=crop&w=1650&q=80"
        alt="E-commerce"
        className="absolute bottom-0 left-0 w-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      />
    </section>
  );
};

export default Hero;
