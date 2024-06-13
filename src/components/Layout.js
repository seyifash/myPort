import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';

const Layout = () => {
  return (
    <div>
        <Navbar />
        <main>
        <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout