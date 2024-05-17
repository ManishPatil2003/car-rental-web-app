import React from 'react'
import { Link } from 'react-router-dom'

const CarCard = ({ car }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={car.image} alt={`${car.carMake} ${car.carModel}`} className="w-full h-40 object-cover rounded-t-lg mb-4" />
      <h2 className="text-xl font-bold mb-2">{`${car.carMake} ${car.carModel}`}</h2>
      <p className="text-gray-600 mb-2">{`${car.carYear}`}</p>
      <p className="text-gray-600 mb-2">{`Max Seats : ${car.carSeat}`}</p>
      <p className="text-gray-800 font-bold mb-2">FUEL TYPE : {car.carFuelType}</p>
      <p className="text-gray-600 mb-2">KM :  {car.carPricePerKlm}/ hr</p>
      {/* <button 
    
     className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline-purple focus:outline-none text-white font-bold py-2 px-4 rounded">
      Rent Now
    </button> */}
      <Link to={`/cars/${car.id}`} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline-purple focus:outline-none text-white font-bold py-2 px-4 rounded">
        Rent Now
      </Link>
    </div>
  )
}

export default CarCard