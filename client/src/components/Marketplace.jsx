import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Marketplace = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from backend API
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);
    const getImageUrl = (imageUrl) => {
      return `http://localhost:8000/${imageUrl}`;
    };
    return (
        <div className='bg-black flex flex-col justify-center items-center'>
            <h1 className='font-hindi text-white text-7xl my-12'>Marketplace</h1>
            <div className='flex justify-center items-center gap-6 mb-12'>
                <ul className='grid grid-cols-1 md:grid-cols-3 gap-12 mx-12'>
                    {products.slice(0, 3).map(product => (
                        <li key={product._id} className='bg-white rounded-lg p-4'>
                            <img className=' h-80 w-80 object-cover rounded' src={getImageUrl(product.imageUrl)} alt={product.name} />
                            <h2 className='text-black text-xl font-semibold my-2'>{product.name}</h2>
                            <p className='text-gray-800 text-lg mb-6'>₹ {product.price}</p>
                            <Link to={`/product/${product._id}`} className='bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 mt-12 rounded'>Buy Now</Link>

                        </li>
                    ))}
                </ul>
            </div>

            <Link to="/marketplace" className="mb-12 relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                <span className="w-52 h-52 rounded rotate-[-40deg] bg-lime-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white text-xl">Go to Marketplace</span>
            </Link>
            <hr className="border-slate-500 w-11/12" />
        </div>
    );
}

export default Marketplace;
