import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <h4 className="font-bold text-lg mb-4">Printify Clone</h4>
          <p className="text-gray-400">Your partner in custom printing success. Sell your designs worldwide.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <h4 className="font-bold text-lg mb-4">Products</h4>
          <ul>
            <li className="mb-2"><a href="/" className="hover:underline">T-shirts</a></li>
            <li className="mb-2"><a href="/" className="hover:underline">Mugs</a></li>
            <li className="mb-2"><a href="/" className="hover:underline">Phone Cases</a></li>
            <li><a href="/" className="hover:underline">Hoodies</a></li>
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
          <h4 className="font-bold text-lg mb-4">Company</h4>
          <ul>
            <li className="mb-2"><a href="/" className="hover:underline">About Us</a></li>
            <li className="mb-2"><a href="/" className="hover:underline">Careers</a></li>
            <li className="mb-2"><a href="/" className="hover:underline">Contact</a></li>
            <li><a href="/" className="hover:underline">Blog</a></li>
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
          <h4 className="font-bold text-lg mb-4">Help</h4>
          <ul>
            <li className="mb-2"><a href="/" className="hover:underline">FAQs</a></li>
            <li className="mb-2"><a href="/" className="hover:underline">Shipping</a></li>
            <li className="mb-2"><a href="/" className="hover:underline">Returns</a></li>
            <li><a href="/" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </motion.div>
      </div>
      <motion.div
        className="text-center text-gray-500 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        &copy; 2024 Printify Clone. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
