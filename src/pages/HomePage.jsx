import React from 'react'
import { Link } from 'react-router-dom'


const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
     
      <main className="flex-grow flex justify-center items-center">
        <div className="max-w-7xl px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Rent the Perfect Car for Your Adventure
          </h1>
          <p className="text-lg mt-4 text-gray-600">
            Explore scenic destinations, enjoy spontaneous trips, or get where
            you need to be in style. We have a wide selection of reliable
            vehicles to suit your needs.
          </p>
          <Link to="/cars" className="inline-flex items-center px-4 py-2 mt-6 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Get Started
          </Link>
        </div>
      </main>
     
    </div>
  )
}

export default HomePage
