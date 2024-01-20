import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import { FaStar } from 'react-icons/fa';

const SingleProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Products.json');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const selectedProduct = data.products.find((p) => p.id.toString() === id);
        setProduct(selectedProduct || {});
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message || 'An error occurred while fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);



  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />
      <div className="xl:mx-28 mx-auto my-8 bg-gray-900 p-8 rounded-lg shadow-lg">
        {loading && <p className="text-gray-200 text-xl">Loading...</p>}
        {error && <p className="text-red-500 text-xl">Error: {error}</p>}
        {!loading && !error && (
          <div className="flex">
            <div className="w-1/2">
              <img className="w-full h-auto mb-8" src={product.image} alt={product.title} />
            </div>
            <div className="w-1/2 ml-8">
              <h2 className="text-3xl text-gray-200 font-bold mb-4">{product.title}</h2>
             
              <p className="text-gray-200 mb-4">{product.description}</p>
              <div className="flex items-center text-yellow-500 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-gray-200 text-xl font-bold mb-4">${product.price}</p>
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Quantity"
                  className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none"
                />
                <button className="bg-gray-950 text-white px-4 py-2 rounded-md hover:bg-gray-700">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SingleProductPage;
