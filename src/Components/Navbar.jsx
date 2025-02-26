import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="container mx-auto flex justify-around items-center h-16 px-32">
        <div className="flex items-center justify-between space-x-8">
          <div className="flex items-center">
            <div className="flex items-center space-x-1">
              <img
                src="/icons/logo.svg"
                alt="CodingNinjas Logo"
                className="h-7"
              />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button className="flex items-center bg-white text-[#394871] hover:bg-gray-50 py-1.5 px-3 rounded-xl text-md font-bold">
              Job Bootcamp
              <span className="ml-1.5">
                <img
                  className="h-4 w-4"
                  src="/icons/down-arrow.png"
                  alt="Dropdown"
                />
              </span>
            </button>

            <button className="flex items-center bg-white text-[#394871] hover:bg-gray-50 py-1.5 px-3 rounded-xl text-[15px] font-bold">
              IIT Certifications
              <span className="ml-1.5">
                <img
                  className="h-4 w-4"
                  src="/icons/down-arrow.png"
                  alt="Dropdown"
                />
              </span>
            </button>
          </div>
        </div>

        <button className="bg-[#F66C3B] hover:bg-[#F8916C] text-white py-2.5 px-4 rounded-xl text-[15px] font-medium">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
