import React ,{useState,useEffect}from 'react'
import { useParams } from 'react-router-dom'


const CarDetails = () => {
  const { carId } = useParams();
  const [car, setCar] = useState(null); // State to store car data

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/cars/${carId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch car data');
        }
        const data = await response.json();
        setCar(data);
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    };

    fetchCar();
  }, [carId]); // Fetch data whenever carId changes

  if (!car) {
    return <div>Loading...</div>; // Display loading indicator while data is being fetched
  }

  // const car = cars.find((car) => car.id === parseInt(id));
  // const car = filteredCars.find((car) => `${car.id}` === carId);
  // if (!car) {
  //   return <div>Car not found</div>;
  // }

  return (
    
    <div className="h-screen  container mx-auto px-4 py-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:h-3/5">
        <img
          src={car.image}
          alt={`${car.make} ${car.model}`}
          className="rounded-lg shadow-md h-full object-cover"
        />
        <div className="flex flex-col  space-y-4">
          <h2 className="text-2xl font-bold">{`Car - ${car.carMake}`}</h2>
          <h2 className='text-2xl font-bold'>Model - {car.carModel}</h2>
          <div className="flex flex-row space-x-4">
            <p className="text-gray-600">{`${car.carYear}`}</p>
            <p className="text-gray-600 hidden md:block">{/* Add more specs here */}</p>
          </div>
          <div className="flex flex-row space-x-4">
            <p className="text-gray-800 font-bold ">Fuel Type : {car.carFuelType}</p>

           
          </div>
          <p className="text-gray-600">{`Max Seats : ${car.carSeat}`}</p>
          <p className="text-gray-600">{`INR ${car.carPricePerKlm} / hr`}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Rent Now
          </button>
        </div>
      </div>
    </div>
    
    )
}

export default CarDetails