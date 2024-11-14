import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from '../Component/Header';
import CartList from './CartList';
import CartDetails from '../Component/CartDetails';
import Cart from '../Component/Cart';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const Body = () => {
  const routes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <CartList />, // Renders CartList as the main page
        },
        {
          path: '/product/:id',
          element: <CartDetails />, // Renders Cart component for individual product pages
        },
        {
          path: '/cart',
          element: <Cart/>, 
        },
      ],
    },
  ];

  const appRouter = createBrowserRouter(routes);

  return <RouterProvider router={appRouter} />;
};

export default Body;
