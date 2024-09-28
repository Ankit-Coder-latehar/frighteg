import React from 'react';

const ReviewsSection = () => {
    return (
        <div className="flex flex-col items-center p-8">
            {/* Top Section */}
            <div className="flex flex-wrap justify-between items-center bg-blue-50 rounded-lg py-6 px-8 shadow-md w-full lg:flex-nowrap">
                {/* G2 logo and Rating */}
                <div className="flex items-center space-x-4">
                    <img src="/Screenshot 2024-09-27 160705.png" alt="G2 logo" className="w-16 h-16" />
                    <div className="flex flex-col">
                        <div className="flex items-center space-x-1">
                            {Array(5).fill(0).map((_, idx) => (
                                <span key={idx} className="text-red-500 text-2xl">★</span>
                            ))}
                        </div>
                        <p className="text-xl font-semibold mt-2">4.8 out of 5 based on over 30+ reviews</p>
                        <p className="text-sm text-gray-500">
                            1st <span className="text-green-500 underline">Easiest to Use</span> in Strategic Sourcing Software
                        </p>
                    </div>
                </div>

                {/* Badges */}
                <div className="flex space-x-4 mt-4 lg:mt-0 lg:ml-auto">
                    <img src="/Screenshot 2024-09-27 160637.png" alt="Leader Badge" className="h-12" />
                    <img src="/Screenshot 2024-09-27 160648.png" alt="Gartner Badge" className="h-12" />
                </div>
            </div>

            {/* Reviews */}
            <div className="flex flex-wrap justify-center gap-8 mt-10">
                {[
                    { text: "Faster scaling in sourcing function with 100% visibility", name: "Madhusudhan B." },
                    { text: "Gives 10x ROI in no time", name: "Girish K" },
                    { text: "Procol has delivered ROI within 45 days", name: "Anshul S." },
                    { text: "It is a new and good e-auction platform", name: "Hemant S." },
                    { text: "One of the smartest tools for sourcing, contracts, and negotiations!", name: "Chandra R." }
                ].map((review, index) => (
                    <div key={index} className="flex flex-col items-center max-w-xs">
                        <div className="flex space-x-1">
                            {Array(5).fill(0).map((_, idx) => (
                                <span key={idx} className="text-red-500 text-2xl">★</span>
                            ))}
                        </div>
                        <p className="text-center text-lg font-semibold mt-2">{review.text}</p>
                        <p className="text-gray-600 mt-2">- {review.name}</p>
                    </div>
                ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-10">
                <h3 className="text-2xl font-bold">Still not convinced?</h3>
                <p className="text-gray-600 mt-4">Connect with one of our experts for a personalized demo and discover how our comprehensive procurement solutions, tailored for the India, can drive success for your business.</p>
                <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-500">Book a Demo</button>
            </div>
        </div>
    );
};

export default ReviewsSection;

