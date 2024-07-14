
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import horses from '../data/horses';
import LandingPage from './LandingPage';

const MainPage = () => {
  const [currentIndices, setCurrentIndices] = useState(Array(horses.length).fill(0));

  const handleNext = (index, length) => {
    setCurrentIndices((prevIndices) =>
      prevIndices.map((currentIndex, i) => (i === index ? (currentIndex + 1) % length : currentIndex))
    );
  };

  const handlePrev = (index, length) => {
    setCurrentIndices((prevIndices) =>
      prevIndices.map((currentIndex, i) => (i === index ? (currentIndex - 1 + length) % length : currentIndex))
    );
  };

  return (
    <>
      <LandingPage />
      <div className="bg-gradient-to-t from-blue-900 via-black to-blue-900 m-[5%] rounded-xl shadow-sky-300 shadow-lg p-5 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-sky-300 font-serif lg:-mt-20 mb-10 lg:mb-20">Horse Ride Booking</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {horses.map((horse, index) => (
            <div key={horse.id} className="bg-sky-100 shadow-sky-300 hover:shadow-sky-300 hover:shadow-lg shadow-md rounded-lg overflow-hidden relative">
              <div className="relative z-10 h-48">
                <motion.img
                  key={`${horse.id}-${currentIndices[index]}`}
                  src={horse.images[currentIndices[index]]}
                  alt={`${horse.name} ${currentIndices[index] + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex justify-between items-center p-2 z-20">
                  <button
                    onClick={() => handlePrev(index, horse.images.length)}
                    className="bg-black bg-opacity-50 text-white p-2 rounded-full"
                    disabled={currentIndices[index] === 0}
                  >
                    &lt;
                  </button>
                  <button
                    onClick={() => handleNext(index, horse.images.length)}
                    className="bg-black bg-opacity-50 text-white p-2 rounded-full"
                    disabled={currentIndices[index] === horse.images.length - 1}
                  >
                    &gt;
                  </button>
                </div>
              </div>
              <div className="p-4 relative z-10">
                <h2 className="text-xl font-serif font-semibold">{horse.name}</h2>
                <Link to="/booking">
                  <motion.button className="mt-4 font-mono bg-gradient-to-tr from-blue-800 to-black hover:bg-gradient-to-tl hover:from-blue-600 hover:to-black  hover:shadow-lg hover:shadow-black text-white px-4 py-2 rounded">Book Now</motion.button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainPage;
