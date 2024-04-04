import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const UserAccount = ({ user, onLogout }) => {

  const navigate = useNavigate();

  
  const handleLogout = () => {
    onLogout();
    navigate('/');
  };


   return (

    <div className="bg-gray-100 flex items-center justify-center h-screen">
    <div className="w-full max-w-md">
      <h1 className="text-2xl font-bold text-center mb-6">Your Dashboard</h1>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Name
          </label>
        </div>
        <div className="md:w-2/3">
          <p className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
           Manish
          </p>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Email
          </label>
        </div>
        <div className="md:w-2/3">
          <p className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
           manishpatil@gmail.com
          </p>
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline-purple focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  </div>
    
  )
}

export default UserAccount