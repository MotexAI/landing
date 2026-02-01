import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CareersPage } from './pages/CareersPage';
import { EthicsPage } from './pages/EthicsPage';
import { ContactPage } from './pages/ContactPage';
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/carreras" element={<CareersPage />} />
        <Route path="/etica" element={<EthicsPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>);

}