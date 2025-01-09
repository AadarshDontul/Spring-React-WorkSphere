import React from 'react';

const NavigationBar = () => {
  return (
    <div className="bg-gray-900 w-full">
      <div className="h-18 flex items-center justify-between px-8">
        {/* Logo*/}
        <div className="items-center">
          <img 
            src="/logo.svg" // Ensure the path to your logo file is correct
            alt="Worksphere logo" 
            className="h-16 w-17 my-1.5"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a href="/" className="text-white text-lg hover:text-gray-300">
            Home
          </a>
          <a href="/about" className="text-white text-lg hover:text-gray-300">
            About
          </a>
          <a href="/profile" className="text-white text-lg hover:text-gray-300">
            Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
