import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Home from './pages/Home';
import AppBar from './layouts/Appbar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Page404 from './pages/Page404';
import Shop from './pages/Shop';
import ShopNavbar from './layouts/Appbar/ShopNavbar';
import ProductDetails from './section/products/ProductDetails';
import CategoryRelat from './section/category/CategoryRelat';

export const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: (
        <div>
          <AppBar />
          <Home />
        </div>
      ),
    },
    {
      path: '/login',
      element: (
        <div>
          <LoginPage />
        </div>
      ),
    },
    {
      path: '/register',
      element: (
        <div>
          <RegisterPage />
        </div>
      ),
    },
    {
      path: '/404',
      element: (
        <div>
          <Page404 />
        </div>
      ),
    },
    {
      path: '/shop',
      element: (
        <div>
          <ShopNavbar/>
          <Shop />
        </div>
      ),
    },
    {
      path: '/productDetails/:id',
      element: (
        <div>
          <ShopNavbar/>
          <ProductDetails/>
        </div>
      ),
    },
    {
      path: '/category/:id',
      element: (
        <div>
          <ShopNavbar/>
           <CategoryRelat/>
        </div>
      ),
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
  return routes
}
