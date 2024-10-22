import React from 'react';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-emerald-600 to-emerald-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            Find Your Perfect Car
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-emerald-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Browse through thousands of cars from verified dealers and private sellers.
          </p>
          <div className="mt-10 max-w-xl mx-auto">
            <div className="flex rounded-lg shadow-lg overflow-hidden">
              <input
                type="text"
                className="flex-1 px-6 py-4 text-gray-700 focus:outline-none"
                placeholder="Search by make, model, or keyword..."
              />
              <button className="px-6 bg-white text-emerald-600 hover:text-emerald-500 flex items-center">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;