import React from 'react'
import Nav from './Nav';
const Users = () => {
    
    const users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        contactNumber: '1234567890',
        rentedCar: 'Toyota Camry',
        pickupLocation: 'New York',
        destinationLocation: 'Los Angeles',
        startDate: '2024-04-10',
        endDate: '2024-04-15'
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        contactNumber: '9876543210',
        rentedCar: 'Honda Accord',
        pickupLocation: 'San Francisco',
        destinationLocation: 'Seattle',
        startDate: '2024-04-12',
        endDate: '2024-04-17'
    },
    // Add more users as needed
];






  return (
    <div className="overflow-x-auto min-h-screen">
        <Nav />
       <h1 className='text-center mt-10 font-bold'>USERS LIST</h1>
            <table className="min-w-full divide-y divide-gray-200 mt-10">
                <thead className="bg-gray-100 ">
                    <tr>
                        <th
                            scope="col"
                            className=" px-6 py-4 whitespace-nowrap font-black text-left text-xs font-medium text-pretty-black uppercase tracking-wider"
                        >
                            ID
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-4 whitespace-nowrap font-black text-left text-xs font-medium text-pretty-black uppercase tracking-wider"
                        >
                            Name
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-4 whitespace-nowrap font-black text-left text-xs font-medium text-pretty-black uppercase tracking-wider"
                        >
                            Email
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-4 whitespace-nowrap font-black text-left text-xs font-medium text-pretty-black uppercase tracking-wider"
                        >
                            Contact Number
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-4 whitespace-nowrap font-black text-left text-xs font-medium text-pretty-black uppercase tracking-wider"
                        >
                            Car Rented
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-4 whitespace-nowrap font-black text-left text-xs font-medium text-pretty-black uppercase tracking-wider"
                        >
                            Pickup Location
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-4 whitespace-nowrap font-black text-left text-xs font-medium text-pretty-black uppercase tracking-wider"
                        >
                            Destination Location
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-4 whitespace-nowrap font-black text-left text-xs font-medium text-pretty-black uppercase tracking-wider"
                        >
                            Start Date
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-4 whitespace-nowrap font-black text-left text-xs font-medium text-pretty-black uppercase tracking-wider"
                        >
                            End Date
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 font-black">
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{user.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{user.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{user.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{user.contactNumber}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{user.rentedCar}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{user.pickupLocation}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{user.destinationLocation}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{user.startDate}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{user.endDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  )
}

export default Users