import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="text-2xl font-bold text-green-600"
        >
          Printify Clone
        </motion.div>
        <nav className="hidden md:flex space-x-6">
          <motion.a href="/" className="text-gray-700 hover:text-green-500" whileHover={{ scale: 1.1 }}>
            Home
          </motion.a>
          <motion.a href="/" className="text-gray-700 hover:text-green-500" whileHover={{ scale: 1.1 }}>
            Products
          </motion.a>
          <motion.a href="/" className="text-gray-700 hover:text-green-500" whileHover={{ scale: 1.1 }}>
            Pricing
          </motion.a>
          <motion.a href="/" className="text-gray-700 hover:text-green-500" whileHover={{ scale: 1.1 }}>
            Contact
          </motion.a>
        </nav>
        <button className="md:hidden bg-green-500 text-white px-4 py-2 rounded">
          Menu
        </button>
      </div>
    </header>
  );
};

export default Header;
