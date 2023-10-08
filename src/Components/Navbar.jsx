import React, { useState } from 'react';
import logo from '../assets/img/job-logo-transformed.png';
import { AiFillHome } from 'react-icons/ai';
import staticProfileImage from '../assets/img/undraw_Male_avatar_g98d.png';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row text-center items-center">
        <img src={logo} alt="reload" className="w-15 h-20 object-contain" />
        <h1 className="text-center my-3 font-semibold text-4xl text-purple-500">UdyogSetu</h1>
      </div>
      <div className="flex items-center">
        <ul className="flex gap-3 flex-rows my-4 text-center mx-7 justify-between">
          <li className="text-red-900 flex text-center font-semibold text-xl gap-2">
            <AiFillHome/> Home
          </li>
          <li
            className={`relative ${dropdownVisible ? 'z-10' : ''}`}
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <div className="flex text-center font-semibold text-xl gap-2 cursor-pointer">
            <img src={staticProfileImage} alt="profile" className="w-6 h-6 ml-1" /> {/* Static profile image */}
               Login/SignUp
              
            </div>
            {dropdownVisible && (
              <div className="absolute left-0 mt-2 bg-white border border-gray-300 shadow-md rounded-md w-48">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100">Login</li>
                  <li className="px-4 py-2 hover-bg-gray-100">SignUp</li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
