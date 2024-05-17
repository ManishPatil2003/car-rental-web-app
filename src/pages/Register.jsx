import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    // Check if passwords match
    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    try {
      // Send a POST request to the backend API for registration
      const response = await axios.post('/api/auth/register', {
        name,
        email,
        password,
        confirmPassword,
      });

      // Handle the response from the backend
      if (response.data.message === 'User registered successfully') {
        // Registration successful
        console.log('Registration successful');
        // You can redirect the user or perform any other necessary actions
        // For example, redirect to the login page:
        // window.location.href = '/login';
      } else {
        // Registration failed
        console.error('Registration failed:', response.data.error);
      }
    } catch (err) {
      // Handle any errors that occurred during the request
      console.error('Registration error:', err.response.data.error);
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className=" text-2xl mb-7 ms-11 font-bold justify-center flex">REGISTER</h2>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Full Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              placeholder="Full Name"
              ref={nameRef}
              required
            />
          </div>
        </div>
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
        <div className="md:flex md:items-center mb-6">
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
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Confirm Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="password"
              placeholder="Confirm Password"
              ref={confirmPasswordRef}
              required
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline-purple focus:outline-none text-white font-bold py-2 px-4 w-full rounded"
              type="submit"
            >
              Register
            </button>
          </div>
        </div>
        <div className="md:flex md:items-center flex justify-center ms-20">
          <p>
            Already an Account ?
            <Link to="/login" className="text-blue-800">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;