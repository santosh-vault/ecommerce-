import React from 'react';

const Banner = () => {
  return (
    <div className='bg-gray-950 text-white py-16 lg:py-20 xl:px-28'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center justify-between lg:justify-between'>

        <div className='lg:w-1/2 lg:pr-10 mb-8 lg:mb-0 text-center lg:text-left mx-20'>
          <h1 className='flex text-4xl lg:text-5xl font-bold mb-4'>
          <div className='text-white'>
            Welcome
            </div>
            <div className='text-yellow-500 px-4'>
            luxuryHub
            </div>
          </h1>
          <p className='text-lg mb-6'>
            Discover a world of luxury with our premium collection of clothing, accessories, arts, tools, and more.
          </p>
          <button className='bg-yellow-500 text-gray-950 px-6 py-3 rounded-full hover:bg-yellow-400'>
            Explore Now
          </button>
        </div>

        <div className='lg:w-1/2 mx-20'>
          <img
            src='https://placekitten.com/400/300'
            alt='Luxury Image'
            className='w-full h-auto rounded-lg shadow-lg'
          />
        </div>
      </div>

    </div>
  );
};

export default Banner;
