import React, { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import { useDispatch , useSelector  } from 'react-redux';
import { fetchUserDetails } from '../../redux/actions';

const AdminDashboard = () => {

    const navigate = useNavigate();


    
    const [newCar, setNewCar] = useState({
        carMake: '',
        carModel: '',
        carYear: '',
        carSeat: '',
        carFuelType: '',
        carPricePerKlm: '',
        renterName: '',
        rentalDate: '',
        returnDate: ''
    });
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    useEffect(() => {
        if (!user) {
            dispatch(fetchUserDetails());
        }
    }, [dispatch]);

    if (!user) {
        return <div>Loading...</div>;
    }

    if (user.role!== 'admin') {
        return <div>You are not authorized to access this page.</div>;
    }

    const handleAddCar = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/cars', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    carMake: newCar.carMake,
                    carModel: newCar.carModel,
                    carYear: parseInt(newCar.carYear),
                    carSeat: parseInt(newCar.carSeat),
                    carFuelType: newCar.carFuelType,
                    carPricePerKlm: parseFloat(newCar.carPricePerKlm),
                    renterName: newCar.renterName,
                    rentalDate: newCar.rentalDate,
                    returnDate: newCar.returnDate
                })
            });
            if (!response.ok) {
                throw new Error('Failed to add new car');
            }
            // Navigate to the cars page after successful addition
            navigate("/admin/cars");
        } catch (error) {
            console.error('Error adding new car:', error);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex">
            {/* Navigation component */}
            <h1>Welcome, Admin!</h1>
            <p>Email: {user.email}</p>
            <Nav />
            <div className="flex-grow mx-4 sm:mx-6 lg:mx-8 px-4 sm:px-6 lg:px-8 py-4">
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Add New Car</h2>
                    <form>
                        <div className="grid grid-cols-2 gap-4">
                            {/* Input fields */}
                            {/* Car Make input */}
                            <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="carMake">
                                    Car Make
                                </label>
                                <input
                                    type="text"
                                    id="carMake"
                                    value={newCar.carMake}
                                    onChange={(e) => setNewCar({ ...newCar, carMake: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            {/* Car Model input */}
                            <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="carModel">
                                    Car Model
                                </label>
                                <input
                                    type="text"
                                    id="carModel"
                                    value={newCar.carModel}
                                    onChange={(e) => setNewCar({ ...newCar, carModel: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            {/* Car Year input */}
                            <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="carYear">
                                    Car Year
                                </label>
                                <input
                                    type="text"
                                    id="carYear"
                                    value={newCar.carYear}
                                    onChange={(e) => setNewCar({ ...newCar, carYear: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            {/* Car Seat input */}
                            <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="carSeat">
                                    Car Seat
                                </label>
                                <input
                                    type="text"
                                    id="carSeat"
                                    value={newCar.carSeat}
                                    onChange={(e) => setNewCar({ ...newCar, carSeat: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            {/* Car Fuel Type input */}
                            <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="carFuelType">
                                    Car Fuel Type
                                </label>
                                <input
                                    type="text"
                                    id="carFuelType"
                                    value={newCar.carFuelType}
                                    onChange={(e) => setNewCar({ ...newCar, carFuelType: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                                                        {/* Car Price Per Kilometer input */}
                                                        <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="carPricePerKlm">
                                    Car Price Per Kilometer
                                </label>
                                <input
                                    type="text"
                                    id="carPricePerKlm"
                                    value={newCar.carPricePerKlm}
                                    onChange={(e) => setNewCar({ ...newCar, carPricePerKlm: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            {/* Renter Name input */}
                            <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="renterName">
                                    Renter Name
                                </label>
                                <input
                                    type="text"
                                    id="renterName"
                                    value={newCar.renterName}
                                    onChange={(e) => setNewCar({ ...newCar, renterName: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            {/* Rental Date input */}
                            <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="rentalDate">
                                    Rental Date
                                </label>
                                <input
                                    type="text"
                                    id="rentalDate"
                                    value={newCar.rentalDate}
                                    onChange={(e) => setNewCar({ ...newCar, rentalDate: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            {/* Return Date input */}
                            <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="returnDate">
                                    Return Date
                                </label>
                                <input
                                    type="text"
                                    id="returnDate"
                                    value={newCar.returnDate}
                                    onChange={(e) => setNewCar({ ...newCar, returnDate: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            {/* Similarly, add inputs for other fields */}
                        </div>
                        <div className="mt-4">
                            <button
                                type="button"
                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                                onClick={handleAddCar}
                            >
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;

