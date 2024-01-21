
import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Card from '../Components/Card';

const Clothing = ({ category }) => {
  const [products, setProducts] = useState([]);
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
        const filteredProducts = data.products.filter((product) => product.category === "Clothing");
        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message || 'An error occurred while fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />
      <div className="xl:mx-28 mx-auto my-8">
        {loading && <p className="text-gray-800 text-xl">Loading...</p>}
        {error && <p className="text-red-500 text-xl">Error: {error}</p>}
        {!loading && !error && (
          <div>
            <h1 className="text-3xl font-bold text-gray-200 mb-8">{category}</h1>
            <div className="flex grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <Card products={products} />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Clothing;
