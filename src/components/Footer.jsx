import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 px-4">
    <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 justify-center items-center">
      <p>© 2024 Car Rental. All rights reserved.</p>
      <nav className="hidden md:flex space-x-4">
        <Link href="#" className="hover:text-gray-300">Terms & Conditions</Link>
        <Link href="#" className="hover:text-gray-300">Privacy Policy</Link>
        <Link href="#" className="hover:text-gray-300">Contact Us</Link>
      </nav>
    </div>
  </footer>

  )
}

export default Footer