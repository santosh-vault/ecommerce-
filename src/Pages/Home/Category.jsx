import React from 'react';

const ImageGrid = () => {
  const logos = [
    'https://placekitten.com/100/100',
    'https://placekitten.com/100/101',
    'https://placekitten.com/100/102',
    'https://placekitten.com/100/103',
    'https://placekitten.com/100/104',
  ];

  const images = [
    'https://placekitten.com/300/300',
    'https://placekitten.com/300/301',
    'https://placekitten.com/300/302',
    'https://placekitten.com/300/303',
    'https://placekitten.com/300/304',
    'https://placekitten.com/300/305',
    'https://placekitten.com/300/306',
    'https://placekitten.com/300/307',
  ];

  return (
    <div className="bg-gray-950 text-white min-h-screen">

      <div className="flex justify-center items-center py-8 border-4 rounded-lg border-yellow-500  xl:mx-28" style={{boxShadow:"inset 2px 2px 10px #FFD700"}}>
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="w-16 h-16 rounded-full mx-2 "
          />
        ))}
      </div>

      <h1 className='mx-auto text-center font-bold text-2xl pt-8 mb-2 text-yellow-500'>Categoris</h1>
      <p className='w-80 h-0.5 bg-yellow-500 text-center mx-auto mb-8'></p>
      <div className="container mx-auto ">
        <div className='xl:mx-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
        {images.map((image, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg ">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-48 object-cover transition-transform transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity">
              <div className="flex items-center justify-center h-full">
                <button className="bg-white text-gray-800 px-4 py-2 rounded-lg">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ImageGrid;
