import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="w-70 md:w-64 sm:w-50 bg-white shadow-md rounded-lg ">
    {/* Navigation Links */}
    <ul style={{ listStyleType: 'disc' }} className="flex lg:flex-col md:flex-col sm:flex-col flex-col py-5 w-20 lg:ps-8 md:ps-5 sm:ps-2 md:w-40 sm:w-35">
        <li className="mb-2 md:mb-0">
            <Link
                to="/admin"
                className="block text-gray-700 hover:text-blue-500 font-bold py-2  rounded transition duration-300"
            >
                Home
            </Link>
        </li>
        <li className="mb-2 md:mb-0">
            <Link
                to="/admin/cars"
                className="block text-gray-700 hover:text-blue-500 font-bold py-2  rounded transition duration-300"
            >
                Cars
            </Link>
        </li>
        <li className="mb-2 md:mb-0">
            <Link
                to="/admin/users"
                className="block text-gray-700 hover:text-blue-500 font-bold py-2  rounded transition duration-300"
            >
                Users
            </Link>
        </li>
        {/* Add more links as needed */}
    </ul>
</div>
  )
}

export default Nav