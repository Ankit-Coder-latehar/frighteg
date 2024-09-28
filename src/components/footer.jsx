import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-6 shadow">
      <div className="container mx-auto flex flex-col items-center sm:flex-row justify-between">
        {/* Logo and Text */}
        <div className="flex items-center mb-4 sm:mb-0">
          <img
            src="https://example.com/logo-url.png" 
            alt="Procol Logo" 
            className="h-10 w-10"
          />
          <span className="ml-2 text-xl font-bold text-gray-800">Procol</span>
        </div>

        {/* Copyright and Links */}
        <div className="text-sm text-gray-500 flex flex-col sm:flex-row items-center">
          <span className="sm:mr-4">&copy; 2023 Procol Tech Private Limited</span>
          <div className="flex space-x-4">
            <a href="#terms" className="hover:underline">Terms of Use</a>
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
            <a href="#disclosure" className="hover:underline">Responsible Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
