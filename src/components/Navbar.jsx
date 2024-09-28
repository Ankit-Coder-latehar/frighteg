import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-50 py-4 shadow">
      <div className="container mx-auto flex items-center justify-start">
        {/* Logo and Text */}
        <div className="flex items-center">
          <img 
            src="https://example.com/logo-url.png" 
            alt="Procol Logo" 
            className="h-10 w-10" 
          />
          <span className="ml-2 text-xl font-bold text-gray-800">Freightgy</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
