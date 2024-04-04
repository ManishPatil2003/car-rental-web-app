import React from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com'; // Assuming you're using EmailJS for contact form submission

const Contact = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_33djc8a', 'template_l2vibiw', formRef.current, 'FDivqhpx-uLzcSoZM')
      .then((result) => {
        console.log(result.text);
        alert('Your message has been sent successfully!');
        e.target.reset(); // Clear form after successful submission
      }, (error) => {
        console.error(error.text);
        alert('An error occurred. Please try again later.');
      });
  };

  return (
    <div className="bg-gray-100">
      
      <main className="max-w-7xl px-4 py-8 mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-lg text-gray-600">
              Have any questions or need assistance? Don't hesitate to reach
              out to us. We're happy to help!
            </p>
            <ul className="list-disc space-y-3 ps-2 text-gray-600">
              <li>
                <a href="tel:+1234567890" className="hover:text-blue-500">
                  Phone: +1 234-567-890
                </a>
              </li>
              <li>
                <a href="mailto:support@carrental.com" className="hover:text-blue-500">
                  Email: support@carrental.com
                </a>
              </li>
              <li>
                <address>123 Main Street, Anytown, CA 12345</address>
              </li>
            </ul>
          </div>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md w-full px-3 py-2 text-gray-700 border border-gray-300"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md w-full px-3 py-2 text-gray-700 border border-gray-300"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 rounded-md w-full px-3 py-2 text-gray-700 border border-gray-300"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
   
    </div>
  );
};

export default Contact;