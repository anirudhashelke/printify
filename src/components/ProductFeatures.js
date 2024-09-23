import React from 'react';
import { motion } from 'framer-motion';

const ProductFeatures = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Printify?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="p-6 bg-white shadow-md rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-green-600">High Quality</h3>
            <p className="text-gray-600">We offer top-notch products with exceptional quality.</p>
          </motion.div>
          <motion.div
            className="p-6 bg-white shadow-md rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
        
            <h3 className="text-xl font-semibold mb-4 text-green-600">Fast Shipping</h3>
            <p className="text-gray-600">Quick and reliable shipping with tracking options.</p>
          </motion.div>
          <motion.div
            className="p-6 bg-white shadow-md rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
          
            <h3 className="text-xl font-semibold mb-4 text-green-600">Easy Integration</h3>
            <p className="text-gray-600">Integrate with top e-commerce platforms easily.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
