import React, { useEffect, useState } from 'react'

import Nav from './Nav';

const Cars = () => {

    const [carList, setCarList] = useState([]);
    const [editingCar, setEditingCar] = useState(null);

    // Function to fetch car details from the API
    const fetchCarDetails = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/cars');
            if (!response.ok) {
                throw new Error('Failed to fetch car details');
            }
            const data = await response.json();
            setCarList(data);
        } catch (error) {
            console.error('Error fetching car details:', error);
        }
    };

    useEffect(() => {
        fetchCarDetails();
    }, []);

   

    const handleEditCar = (car) => {
        setEditingCar(car);
    };

    const handleUpdateCar = () => {
        const updatedCarList = carList.map((c) =>
            c.id === editingCar.id ? editingCar : c
        );
        setCarList(updatedCarList);
        setEditingCar(null);
    };

    const handleDeleteCar = (carId) => {
        const updatedCarList = carList.filter((c) => c.id !== carId);
        setCarList(updatedCarList);
    };

  return (
    <div className="bg-gray-100 min-h-screen flex">
    <Nav />
    <div className="w-full p-4 md:p-8 lg:p-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Cars</h1>
        {carList.map((car) => (
            <div key={car.id} className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
                <div className="p-4 md:p-6">
                    <h3 className="text-xl font-semibold text-gray-800">{car.carMake} {car.carModel}</h3>
                    <br />
                    <p className="text-gray-600">Year: {car.carYear}, Seats: {car.carSeat}</p>
                    <br />
                    <p className="text-gray-600">km/hr: {car.carPricePerKlm}, Fuel Type: {car.carFuelType}</p>
                    <br />
                    <p className="text-gray-600">Status: {car.status}</p>
                </div>
                <div className="p-4 md:p-6 bg-gray-100 flex justify-end">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
                        onClick={() => handleEditCar(car)}
                    >
                        Edit
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleDeleteCar(car.id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        ))}
        {editingCar && (
            <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
                <div className="p-4 md:p-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Edit Car</h2>
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="carMake">
                                    Make
                                </label>
                                <input
                                    type="text"
                                    id="carMake"
                                    value={editingCar.carMake}
                                    onChange={(e) =>
                                        setEditingCar({ ...editingCar, carMake: e.target.value })
                                    }
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="carModel">
                                    Model
                                </label>
                                <input
                                    type="text"
                                    id="carModel"
                                    value={editingCar.carModel}
                                    onChange={(e) =>
                                        setEditingCar({ ...editingCar, carModel: e.target.value })
                                    }
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            {/* Similarly, add inputs for other fields */}
                        </div>
                        <div className="mt-4">
                            <button
                                type="button"
                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
                                onClick={handleUpdateCar}
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                                onClick={() => setEditingCar(null)}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )}
    </div>
</div>
  )
}

export default Cars