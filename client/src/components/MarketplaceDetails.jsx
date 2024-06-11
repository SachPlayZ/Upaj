import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';    

const MarketplaceDetails = () => {
    const navigate = useNavigate();
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
    return `https://upaj.onrender.com/${imageUrl}`;
  };

  return (
    <div
      style={{
        backgroundImage: `url('../bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className='flex flex-col justify-center items-center'>
      <h1 className='font-hindi text-9xl mt-28 mb-16 text-lime-300'>Marketplace</h1>
      <div className=' mx-auto flex gap-6 mb-12'>
        <button onClick={() => { navigate('/seller') }} className="p-[3px] relative hover:scale-110 transition-all transition-200">
  <div className="absolute inset-0 bg-gradient-to-r from-lime-500 to-green-500 rounded-lg" />
  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
    Sell Your Products
  </div>
</button>
      </div>

      {error && <p>Error fetching products: {error}</p>}
      
      <div className='flex justify-center items-center gap-6 mb-12'>
        <ul className='grid grid-cols-2 md:grid-cols-4 gap-10 mx-12'>
          {products.map((product) => (
            <li key={product._id} className='bg-white bg-opacity-70 rounded-lg shadow-lg p-4 hover:scale-110 transition-all transition-200'>
              <img src={getImageUrl(product.imageUrl)} alt={product.name} className='h-52 w-52 object-cover rounded-lg' />
              <h2 className='font-bold text-lg mt-2'>{product.name}</h2>
              <p className='text-sm text-gray-800'>₹ {product.price}</p>
              <p className='text-sm text-gray-800 mb-6'>Qty : {product.quantity}</p>
        <Link to={`/product/${product._id}`} className='bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded'>Buy Now</Link>

            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MarketplaceDetails;
