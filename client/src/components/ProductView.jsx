import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch product details from backend API based on productId
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProduct();
  }, [productId]);

  const getImageUrl = (imageUrl) => {
    return `https://upaj.onrender.com/${imageUrl}`;
  };

  if (error) {
    return <p>Error fetching product: {error}</p>;
  }

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div
    style={{
        backgroundImage: `url('../Market1.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
    }}
    className="container mx-auto h-screen">
      <div className="flex flex-col md:flex-row items-center py-40">
        <div className="md:w-1/2">
          <img src={getImageUrl(product.imageUrl)} alt={product.name} className="w-full md:w-96 rounded-lg ms-16" />
        </div>
        <div className="md:w-1/2 md:ml-8">
          <h2 className="text-9xl font-bold mb-12 text-white">{product.name}</h2>
          <p className="text-white font-bold mb-8 text-3xl font-serif">Price: ₹{product.price}</p>
          <p className="text-white font-bold mb-12 text-3xl font-serif">Qty: {product.quantity}</p>
          <button className="bg-lime-500 hover:bg-lime-700 transition-all transition-200 text-3xl rounded-xl text-white font-bold py-2 px-4" >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
