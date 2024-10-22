import React from 'react';
import { Car, Truck, Bike } from 'lucide-react';

const categories = [
  {
    name: 'Luxury Cars',
    icon: Car,
    count: '2,345'
  },
  {
    name: 'SUVs & Trucks',
    icon: Truck,
    count: '1,678'
  },
  {
    name: 'Sports Cars',
    icon: Car,
    count: '892'
  },
  {
    name: 'Motorcycles',
    icon: Bike,
    count: '1,234'
  }
];

const Categories = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Browse by Category
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Find exactly what you're looking for
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-gray-50 rounded-lg p-6 hover:bg-emerald-50 transition-colors duration-300 cursor-pointer"
            >
              <category.icon className="h-8 w-8 text-emerald-600 mb-4" />
              <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{category.count} listings</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;