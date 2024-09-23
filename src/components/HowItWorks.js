import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div className="p-6" whileHover={{ scale: 1.05 }}>
            <h3 className="text-xl font-semibold mb-4 text-green-600">1. Create an Account</h3>
            <p className="text-gray-600">Sign up and create your Printify account.</p>
          </motion.div>
          <motion.div className="p-6" whileHover={{ scale: 1.05 }}>
            <h3 className="text-xl font-semibold mb-4 text-green-600">2. Customize Products</h3>
            <p className="text-gray-600">Choose products and add your designs.</p>
          </motion.div>
          <motion.div className="p-6" whileHover={{ scale: 1.05 }}>
            <h3 className="text-xl font-semibold mb-4 text-green-600">3. Start Selling</h3>
            <p className="text-gray-600">Publish your products to your store and start selling.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
