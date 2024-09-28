import React from 'react';

const BiddingStrategies = () => {
  return (
    <div className="flex justify-center items-center h-200 bg-white">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex">
          {/* Left Section */}
          <div className="w-1/2 bg-white p-6 rounded-md border-gray-50">
            <h2 className="text-2xl font-semibold mb-4 text-left">Use Advance Bidding Strategies</h2>
            <p className="mb-4 text-left">45+ unique strategies to optimize savings and<br/> deliver exceptional results for every business<br/> need</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-80">See how</button>
          </div>
          
          {/* Right Section */}
          <div className="w-1/2 bg-gradient-to-r from-purple-200 via-red-200 to-purple-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Select Auction Strategy</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="border p-3 rounded-lg hover:bg-blue-100 cursor-pointer">
                <h4 className="font-semibold">Rank Based</h4>
                <p className="text-sm">Vendors will be ranked on bid price</p>
              </div>
              <div className="border p-3 rounded-lg hover:bg-blue-100 cursor-pointer">
                <h4 className="font-semibold">Price Based</h4>
                <p className="text-sm">Minimum bid price visible to vendors</p>
              </div>
              <div className="border p-3 rounded-lg hover:bg-blue-100 cursor-pointer">
                <h4 className="font-semibold">Knockout</h4>
                <p className="text-sm">Minimum bid price visible to vendors</p>
              </div>
              <div className="border p-3 rounded-lg hover:bg-blue-100 cursor-pointer">
                <h4 className="font-semibold">Traffic Light</h4>
                <p className="text-sm">Minimum bid price visible to vendors</p>
              </div>
              <div className="border p-3 rounded-lg hover:bg-blue-100 cursor-pointer">
                <h4 className="font-semibold">Dutch Auction</h4>
              </div>
              <div className="border p-3 rounded-lg hover:bg-blue-100 cursor-pointer">
                <h4 className="font-semibold">English Auction</h4>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default BiddingStrategies;
