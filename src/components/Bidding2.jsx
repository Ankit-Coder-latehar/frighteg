import React from 'react';

const Bidding2Strategies = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="bg-white shadow-lg rounded-lg p-6 w-3/4">
        <div className="flex">
          {/* Left Section - Image */}
          <div className="w-1/2 bg-gradient-to-r from-purple-200 via-red-200 to-purple-100 p-6 rounded-lg flex justify-center items-center">
            <div className="grid grid-cols-1 gap-4">
              <img src="/Screenshot 2024-09-27 182519.png" alt="cards" className="w-full h-auto rounded-lg" />
            </div>
          </div>

          {/* Right Section - Text */}
          <div className="w-1/2 bg-white p-6 rounded-md border-gray-50">
            <h2 className="text-2xl font-semibold mb-4 text-left">
              Use Advance Bidding Strategies
            </h2>
            <p className="mb-4 text-left">
              45+ unique strategies to optimize savings and
              <br /> deliver exceptional results for every business
              <br /> need
            </p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
              See how
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bidding2Strategies;
