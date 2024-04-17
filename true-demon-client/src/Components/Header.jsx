//Header component
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = () => {
    // Implement your search logic here
    alert(`Searching for: ${searchTerm} `);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-3xl font-bold">
          <Link to="/home"> True Demon </Link>
        </div>

        {/* Navigation Section */}
        <nav
          className={`md:flex ${
            mobileMenuOpen ? "flex" : "hidden"
          } mt-4 md:mt-0`}
        >
          <Link
            to="/home"
            className="block md:inline-block mt-2 md:mt-0 mr-4 hover:text-gray-300"
          >
            {" "}
            Home{" "}
          </Link>
          <Link
            to="/products"
            className="block md:inline-block mt-2 md:mt-0 mr-4 hover:text-gray-300"
          >
            {" "}
            Products{" "}
          </Link>
          <Link
            to="/about"
            className="block md:inline-block mt-2 md:mt-0 mr-4 hover:text-gray-300"
          >
            {" "}
            About{" "}
          </Link>
          <Link
            to="/cart"
            className="block md:inline-block mt-2 md:mt-0 mr-4 hover:text-gray-300"
          >
            {" "}
            Cart{" "}
          </Link>
        </nav>

        {/* Wishlist and Search Section */}
        <div className="flex items-center">
          {/* Wishlist Link */}
          <Link
            to="/wishlist"
            className="text-gray-500 hover:text-gray-800 ml-4 md:ml-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 17.8l-.695-.633C4.22 13.204 1 10.22 1 6.6 1 3.587 3.587 1 6.6 1 8.148 1 9.61 1.87 10 3.1 10.39 1.87 11.852 1 13.4 1 16.413 1 19 3.587 19 6.6c0 3.62-3.22 6.604-8.305 10.567L10 17.8z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* Search Input */}
          <div className="relative ml-4 md:ml-8">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 pl-4 pr-10 rounded-full border focus:border-blue-500 focus:outline-none text-gray-800"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 text-gray-500"
              >
                <path d="M9 21h6a2 2 0 002-2v-1H7v1a2 2 0 002 2zm7-3V8a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2zM9 3a3 3 0 100-6 3 3 0 000 6z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
