import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DarkThemeProvider from './provider/DarkThemeProvider';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <DarkThemeProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<AboutPage />} />
        </Route>
      </Routes>
    </DarkThemeProvider>
  );
};

export default App;
