import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DarkThemeProvider from './provider/DarkThemeProvider';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Error404 } from './pages/Error404';

const App = () => {
  return (
    <DarkThemeProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>
    </DarkThemeProvider>
  );
};

export default App;
