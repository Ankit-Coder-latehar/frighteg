import React, { useEffect, useRef } from 'react';

const logos = [
  '/Screenshot 2024-09-27 175856.png',
  '/Screenshot 2024-09-27 175901.png',
  '/Screenshot 2024-09-27 175907.png',
  '/Screenshot 2024-09-27 175917.png',
  '/Screenshot 2024-09-27 175907.png',
  '/Screenshot 2024-09-27 175856.png',
  '/Screenshot 2024-09-27 175901.png',
  '/Screenshot 2024-09-27 175856.png',
];

const LogoCarousel = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const slideInterval = setInterval(() => {
      if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollAmount = 0;
      } else {
        scrollAmount += 2;
      }
      scrollContainer.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }, 20);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="bg-white py-8 overflow-hidden">
      <h2 className="text-center text-lg font-semibold text-gray-700 mb-6">
        Trusted by World's Leading Enterprises
      </h2>
      <div className="max-w-6xl mx-auto overflow-hidden relative">
        <div ref={scrollRef} className="flex space-x-8 animate-scroll whitespace-nowrap">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="inline-block flex-shrink-0 h-24 w-40 flex justify-center items-center"
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
