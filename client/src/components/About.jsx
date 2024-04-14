import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto py-20 bg-black flex justify-center flex-col items-center">
      <h1 className="text-7xl font-hindi font-bold text-center text-white mb-8">About Us</h1>
      <p className="text-xl text-center text-white w-3/4">
        Upaj is a platform that connects farmers with buyers. We help farmers to sell their produce directly to consumers, eliminating middlemen and ensuring fair prices for both farmers and buyers. Our mission is to empower farmers and promote sustainable agriculture.
      </p>
      <img className="w-60 h-60 object-cover my-12" src="logo.png" alt="logo" />
      <p className="text-xl text-center text-white w-3/4">
      Our 7-day money-back guarantee for non-perishable items ensures customer satisfaction. If you're not completely happy with your purchase within a week, simply return the product in its original condition, and we'll refund your purchase price. We prioritize your peace of mind and hassle-free shopping experience.
      </p>
    </div>
    
  );
};
    
export default About;
