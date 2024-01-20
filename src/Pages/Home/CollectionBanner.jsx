import React from 'react';

const CollectionBanner = () => {
  const bannerStyle = {
    backgroundImage: "url('https://s3.us-west-1.amazonaws.com/www.vivaglammagazine.com/wp-content/uploads/2023/03/fashion-women-pants-blonde-friends.jpg')",
  };

  return (
    <div className="relative h-64 bg-cover bg-center " style={bannerStyle}>
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5) 100%)',
        }}
      ></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Explore Our Collection</h2>
          <p className="text-lg mb-8">Discover the latest trends and styles</p>
          <button className="bg-white text-gray-800 px-6 py-2 rounded-full font-bold hover:bg-gray-200">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionBanner;
