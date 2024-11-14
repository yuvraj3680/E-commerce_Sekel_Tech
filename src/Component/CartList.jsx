import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_URL } from '../Utils/Constant';

const CartList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    FetchCartList();
  }, []);

  const FetchCartList = async () => {
    try {
      const response = await fetch(PRODUCT_URL);
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.log('Error fetching data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => handleProductClick(product.id)}
          className="cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
        >
          <img
            src={product.images[0] || ''}
            alt={product.title || 'Product Image'}
            className="w-full h-40 object-cover"
          />
          <div className="p-3">
            <h3 className="text-sm font-medium text-gray-800 truncate">{product.title}</h3>
            <p className="text-lg font-semibold text-blue-600 my-1">${product.price}</p>
            <p className="text-xs text-gray-500 line-clamp-2">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartList;
