import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faBriefcase, faAddressBook } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-1/3 z-50">
      <nav className="bg-teal-600 p-4 rounded-r-2xl shadow-lg">
        <ul className="flex flex-col items-center space-y-6">
          <li>
            <a href="#home" className="text-white hover:text-gray-200">
              <FontAwesomeIcon icon={faHouse} className="w-7 h-7" />
            </a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-gray-200">
              <FontAwesomeIcon icon={faUser} className="w-7 h-7" />
            </a>
          </li>
          <li>
            <a href="#work" className="text-white hover:text-gray-200">
              <FontAwesomeIcon icon={faBriefcase} className="w-7 h-7" />
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-200">
              <FontAwesomeIcon icon={faAddressBook} className="w-7 h-7" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
