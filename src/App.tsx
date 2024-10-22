import React from 'react';
import { Car, Search, User, ShoppingCart } from 'lucide-react';
import FeaturedCars from './components/FeaturedCars';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Car className="h-8 w-8 text-emerald-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">AutoMarket</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-emerald-600">Browse Cars</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600">Sell Your Car</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600">About</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Search className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <User className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <ShoppingCart className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <FeaturedCars />
        <Categories />
      </main>

      <Footer />
    </div>
  );
}

export default App;