import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from '../Component/Header';
import CartList from './CartList';
import CartDetails from '../Component/CartDetails';
import Cart from './ShoppingCart';

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
          element: <CartList />, 
        },
        {
          path: '/product/:id',
          element: <CartDetails />, 
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
