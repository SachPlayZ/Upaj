// SellerPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SellerPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('quantity', quantity);
    formData.append('image', image);

    try {
      const response = await axios.post('https://web-craft-r2-backend.vercel.app/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(response.data);
      navigate('/marketplace');
    } catch (error) {
      console.error(error);
    }

    setName('');
    setPrice('');
    setCategory('');
    setQuantity('');
    setImage(null);
  };

  return (
    <div className="bg-gray-900 h-screen">
      <h1 className="text-7xl text-white text-center font-hindi pt-20 pb-12">Sellers Portal</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto text-white">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">Product Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 sm:text-sm bg-gray-800 text-gray-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-300">Price (₹)</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 sm:text-sm bg-gray-800 text-gray-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-300">Category</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 sm:text-sm bg-gray-800 text-gray-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-300">Quantity (Kg)</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 sm:text-sm bg-gray-800 text-gray-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-300">Image</label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-lime-500 focus:border-lime-500 sm:text-sm bg-gray-800 text-gray-300"
            required
          />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lime-600 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500">
            Sell Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default SellerPage;
