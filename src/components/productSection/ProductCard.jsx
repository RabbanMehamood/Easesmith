import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/thank-you');
  };

  return (
    <div className="border p-4">
      <img src={product.image} alt={product.name} className="w-full h-48 rounded-full" />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.description}</p>
      <div className="flex items-center justify-between mt-2">
        <span className="font-bold text-green-600">₹{product.price}</span>
        <button 
          onClick={handleClick}
          className="bg-green-500 text-white py-1 px-3 rounded">
          View Product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
