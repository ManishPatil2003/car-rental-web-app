import React, { useState, useEffect } from 'react'
import CarCard from './CarCard'
// import cars from '../assets/carDetails'

const CarList = () => {

  const [searchItem, setSearchItem] = useState('')


  const [cars, setCars] = useState([]); // State to store all car data
  const [filteredCars, setFilteredCars] = useState([])

  const fetchCarData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/cars');
      if (!response.ok) {
        throw new Error('Failed to fetch car data');
      }
      const data = await response.json();
      setCars(data);
      setFilteredCars(data);
    } catch (error) {
      console.error('Error fetching car data:', error);
    }
  };

  useEffect(() => {
    fetchCarData();
  }, []);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)

    const filteredItems = cars.filter((car) =>
      car.make.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredCars(filteredItems);
  }


  return (
    <div>
      <div className="flex items-center justify-center h-16 bg-white sm:h-20 w-1/2 mx-auto ">
        <input
          className=" h-9 px-3 rounded-full border border-gray-200 outline-none grow sm:w-64 sm:h-16 ms-8 bg-gray-100"
          type="text"
          placeholder="Search..."
          value={searchItem}
          onChange={handleInputChange}
        />
        <button className="ml-4 px-3 py-2 rounded-full bg-indigo-500 text-white hover:bg-indigo-600">
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredCars.map((car) => (
          <div key={car.id} className="w-full md:w-1/3 p-4">
            <CarCard car={car} />
          </div>
        ))}

      </div>
    </div>
  )
}

export default CarList
