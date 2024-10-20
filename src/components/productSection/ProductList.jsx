import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="px-20 grid grid-cols-3 gap-4">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center mt-6">
        {[...Array(Math.ceil(products.length / productsPerPage)).keys()].map(number => (
          <button 
            key={number + 1} 
            onClick={() => paginate(number + 1)}
            className={`my-2 mx-1 px-3 py-1 border rounded ${currentPage === number + 1 ? 'bg-[#165315] text-white' : ''}`}>
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
