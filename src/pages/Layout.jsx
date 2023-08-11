import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, NavBar } from '../components';

export const Layout = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Outlet />
    </div>
  );
};
