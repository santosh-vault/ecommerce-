import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Clothing', path: '/category/clothing', logo: 'https://placekitten.com/40/40' },
  { name: 'Accesories', path: '/category/Accesories', logo: 'https://placekitten.com/40/41' },
  { name: 'furinture', path: '/category/furinture', logo: 'https://placekitten.com/40/42' },
  { name: 'arts', path: '/category/arts', logo: 'https://placekitten.com/40/42' },
  { name: 'tools', path: '/category/tools', logo: 'https://placekitten.com/40/42' },
];

const CategoryButtons = () => {
  return (
    <div className="bg-gray-950 p-8 shadow-lg">
      <div className="flex items-center justify-center gap-6 mb-8 py-6 xl:mx-28" style={{boxShadow: ' inset 2px 2px 10px #fff'}}>
        {categories.map((category, index) => (
          <img
            key={index}
            src={category.logo}
            alt={`Logo ${index + 1}`}
            className="w-20 h-20
             rounded-full border-2 border-yellow-500"
          />
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-10 xl:mx-28">
        {categories.map((category, index) => (
          <Link
            to={category.path}
            key={index}
            className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg h-24 w-24 flex items-center justify-center hover:bg-yellow-400 transition duration-300"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryButtons;
