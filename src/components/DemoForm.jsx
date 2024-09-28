import React from 'react';

const DemoForm = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center mt-[-16px]">
      <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row justify-between items-center max-w-10xl mx-auto">
        {/* Left side - Main Text */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-900">
            India's most user-friendly eBidding platform
          </h1>
          <p className="text-gray-600 mt-4">
            Give your business the digital sourcing advantage with our advanced, mobile-first solutions
          </p>
          <div className="flex items-center space-x-4 mt-6">
            <img src="/Screenshot 2024-09-27 160705.png" alt="G2 Crowd Badge" className="h-10" />
            <img src="/path/to/forbes-badge.png" alt="Forbes Badge" className="h-10" />
            <img src="/path/to/cio-review.png" alt="CIO Review" className="h-10" />
          </div>
        </div>

        {/* Right side - Form */}
        <div className="bg-white shadow-md rounded-lg p-8 mt-8 md:mt-0 md:ml-8 w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Get a Free Demo</h2>
          <p className="text-sm text-gray-600 mb-6">
            We'd love to hear from you. Please fill out this form to schedule a demo with us or give us a call on{' '}
            <a href="tel:+917666682222" className="text-blue-500 font-medium">+91 76666 82222</a>.
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 text-left">Company Name*</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter company name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 text-left">Full Name*</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 text-left">Phone Number*</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 text-left">Work Email ID*</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your work email"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DemoForm;
