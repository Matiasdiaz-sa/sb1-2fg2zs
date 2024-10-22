import React from 'react';
import { Car, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Car className="h-8 w-8 text-emerald-500" />
              <span className="ml-2 text-xl font-bold text-white">AutoMarket</span>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              Your trusted destination for buying and selling vehicles online.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-500">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-500">Sell Your Car</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500">Buy a Car</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500">Car Valuation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500">News & Reviews</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} AutoMarket. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;