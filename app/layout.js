import React from 'react';
import Sidebar from './components/sidebar';
import Header from './components/header';
import './globals.css';

export const metadata = {
  title: 'Courier App',
  description: 'Courier application frontend',
};

const Layout = ({ children }) => (
  <html lang="en">
    <body className="transition-all duration-300 flex w-[100%] h-screen p-4 relative bg-[#f3f3f3] overflow-hidden overflow-y-auto">
      <Sidebar className="md:hidden "/>
      <div className="flex-1">
        <Header />
        <main>{children}</main>
      </div>
    </body>
  </html>
);

export default Layout;
