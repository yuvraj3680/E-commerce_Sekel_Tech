import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../Utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };
 
  if (cartItems.length === 0) {
    return <div className="p-4 text-center">Your cart is empty.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
      <div className="space-y-4">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center">
              <img src={item.images?.[0] || ''} alt={item.title} className="w-16 h-16 object-cover rounded mr-4" />
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-600">Price: ${item.price}</p>
                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
               
              </div>
            </div>
            <button
              onClick={() => handleRemoveItem(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-colors"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4 text-right">
        <p className="text-lg font-semibold">
          Total: $
          {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Cart;
