import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  // Get the cart items from the Redux store
  const cartItems = useSelector(state => state.cart.items);

  // Calculate the total quantity of items in the cart
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="border-b border-gray-300">
      <div className="flex justify-between items-center px-4 py-2">
        {/* Logo on the left */}
        <div className="text-xl font-bold">
          Logo
        </div>
        {/* Links on the right */}
        <div>
          <ul className="flex gap-4 text-sm">
            <li>
              <Link to="/cart" className="hover:text-blue-500 relative">
                Cart
                {totalItems > 0 && (
                  <span className="ml-1 text-white bg-red-500 rounded-full px-2 py-0.5 text-xs">
                    {totalItems}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
