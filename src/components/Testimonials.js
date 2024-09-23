import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <p className="text-gray-600 mb-4">"Printify helped me grow my business with ease. The process was seamless!"</p>
            <h4 className="font-semibold text-green-600">- John Doe</h4>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <p className="text-gray-600 mb-4">"Great product quality and excellent customer service."</p>
            <h4 className="font-semibold text-green-600">- Jane Smith</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
