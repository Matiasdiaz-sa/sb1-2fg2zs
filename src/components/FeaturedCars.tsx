import React from 'react';

const cars = [
  {
    id: 1,
    name: 'Tesla Model 3',
    price: 42990,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80',
    year: 2024,
    mileage: '0',
    location: 'San Francisco, CA'
  },
  {
    id: 2,
    name: 'BMW M4 Competition',
    price: 74900,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80',
    year: 2023,
    mileage: '12,450',
    location: 'Los Angeles, CA'
  },
  {
    id: 3,
    name: 'Porsche 911 GT3',
    price: 169700,
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80',
    year: 2024,
    mileage: '1,200',
    location: 'Miami, FL'
  }
];

const FeaturedCars = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Vehicles
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Discover our hand-picked selection of premium vehicles
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{car.name}</h3>
                <p className="mt-2 text-2xl font-bold text-emerald-600">
                  ${car.price.toLocaleString()}
                </p>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <span>{car.year}</span>
                  <span>{car.mileage} miles</span>
                  <span>{car.location}</span>
                </div>
                <button className="mt-6 w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCars;