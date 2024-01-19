import React from 'react';

const Card = ({ products }) => {
  return (
    <div className='flex justify-start items-center gap-4 flex-wrap'>
      {Array.isArray(products) && products.length > 0 ? (
        products.map((item) => (
          <a key={item.id} href={`/product/${item.id}`}>
            <div className="max-w-sm rounded my-4 overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform duration-300">
              <img className="w-full h-36 object-cover" src={item.image} alt={item.title} />
              
              <div className="px-6 py-4">
                <div className="font-bold text-xl ">{item.title}</div>
                <p className="text-gray-700 text-base">{item.description}</p>
              </div>
              
              <div className="px-6 py-2">
                <span className="text-gray-600 text-sm">Price: ${item.price}</span>
              </div>
            </div>
          </a>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default Card;
