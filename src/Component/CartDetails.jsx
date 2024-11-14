import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { PRODUCT_URL } from '../Utils/Constant';
import { addItem } from '../Utils/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`${PRODUCT_URL}/${id}`);
      if (response.ok) {
        const data = await response.json();
        setProduct(data);
        setError(null);
      } else {
        setError('Error fetching product data');
      }
    } catch (error) {
      setError('Error fetching product data');
    }
  };

  const handleAddToCart = () => {
    if (product) {
      dispatch(addItem(product));
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <img
        src={product.images?.[0] || ''}
        alt={product.title}
        className="w-full h-80 object-cover rounded-lg mb-4"
      />
      <h1 className="text-2xl font-semibold text-gray-800">{product.title}</h1>
      <p className="text-lg font-semibold text-blue-600 my-2">${product.price}</p>
      <p className="text-gray-600 text-sm mb-4">{product.description}</p>
      <div className="flex space-x-4">
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
