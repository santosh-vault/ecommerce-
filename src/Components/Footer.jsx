import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-yellow-500 p-4">
      <div className=" mx-auto xl:mx-28">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold mb-2">Company Name</h3>
            <p>123 Main Street, Cityville, Country</p>
            <p>Email: info@example.com</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="list-none p-0">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <hr className="my-4 border-t border-gray-700" />

        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
