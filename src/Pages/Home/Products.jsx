import React, { useState, useEffect } from 'react';
import { FaFilter } from 'react-icons/fa';
import Card from '../../Components/Card';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSortOption, setSelectedSortOption] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('Products.json');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message || 'An error occurred while fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

// Filter products by category
  const filteredProducts = selectedCategory === 'All' ? products : products.filter(product => product.category === selectedCategory);

  // Sort products based on the selected sorting option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (selectedSortOption === 'A-Z') {
      return a.title.localeCompare(b.title);
    } else if (selectedSortOption === 'Z-A') {
      return b.title.localeCompare(a.title);
    } else if (selectedSortOption === 'Low-to-High') {
      return a.price - b.price;
    } else if (selectedSortOption === 'High-to-Low') {
      return b.price - a.price;
    }
    return 0;
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='bg-gray-950'>
      <div className='xl:mx-28 mx-auto px-4 xl:px-8 py-6'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-8 text-white'>
            <button onClick={() => setSelectedCategory('All')} className={`text-white ${selectedCategory === 'All' ? 'underline' : ''}`}>All</button>
            <button onClick={() => setSelectedCategory('Clothing')} className={`text-white ${selectedCategory === 'Clothing' ? 'underline' : ''}`}>Clothing</button>
            <button onClick={() => setSelectedCategory('Hoodie')} className={`text-white ${selectedCategory === 'Hoodie' ? 'underline' : ''}`}>Hoodie</button>
            <button onClick={() => setSelectedCategory('Bags')} className={`text-white ${selectedCategory === 'Bags' ? 'underline' : ''}`}>Bags</button>
          </div>

          <div className='flex items-center'>
            <FaFilter className='bg-white' />
            <select
              value={selectedSortOption}
              onChange={(e) => setSelectedSortOption(e.target.value)}
              className='ml-2 border bg-gray-100 border-white px-2 py-1 rounded-md bg-transparent text-gray-800 focus:outline-none'
            >
              <option value='All'>All</option>
              <option value='A-Z'>A-Z</option>
              <option value='Z-A'>Z-A</option>
              <option value='Low-to-High'>Low to High</option>
              <option value='High-to-Low'>High to Low</option>
            </select>
          </div>
        </div>

        <div className="flex grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-6">
          <Card products={sortedProducts} />
        </div>
      </div>
    </div>
  );
};

export default Products;
