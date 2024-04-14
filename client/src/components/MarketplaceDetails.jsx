import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MarketplaceDetails = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch products from backend API
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProducts();
  }, []);
  const getImageUrl = (imageUrl) => {
    return `http://localhost:8000/${imageUrl}`;
  };

  return (
    <div
      style={{
        backgroundImage: `url('../bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className='flex flex-col justify-center items-center'>
      <h1 className='font-hindi text-9xl mt-28 mb-16 text-lime-200'>Marketplace</h1>
      <div className=' ms-auto flex gap-6 mb-12 me-6'>
        <button onClick={() => { window.location.href = '/seller' }} className='bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded'>Seller Portal</button>
        <button className='bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded'>Filters</button>
      </div>

      {error && <p>Error fetching products: {error}</p>}
      
      <div className='flex justify-center items-center gap-6 mb-12'>
        <ul className='grid grid-cols-2 md:grid-cols-4 gap-10 mx-12'>
          {products.map((product) => (
            <li key={product._id} className='bg-white bg-opacity-70 rounded-lg shadow-lg p-4'>
              <img src={getImageUrl(product.imageUrl)} alt={product.name} className='h-52 w-52 object-cover rounded-lg' />
              <h2 className='font-bold text-lg mt-2'>{product.name}</h2>
              <p className='text-sm text-gray-500'>₹ {product.price}</p>
              <p className='text-sm text-gray-500'>Kgs : {product.quantity}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MarketplaceDetails;
