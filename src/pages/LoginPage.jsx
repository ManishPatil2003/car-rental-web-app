import React from 'react'
import { useRef } from 'react';
import { Link } from 'react-router-dom';

  
const LoginPage = () => {


  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen content-center">
     
    <form className="w-full max-w-sm " onSubmit={handleSubmit}>
    <h2 className=' text-2xl mb-7 ms-12 font-bold justify-center flex'>LOGIN</h2>
     <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Email
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="email"
            placeholder="Email"
            ref={emailRef}
            required
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-5">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Password
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline-purple focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Login
          </button>
        </div>
      </div>
      <div className='md:flex md:items-center flex justify-center ms-20'>
      <p> Create an Account ? 
        <Link  to="/register" className='text-blue-800'>Register</Link>
      </p>
      </div>
    </form>
  </div>
  )
}

export default LoginPage;