import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Layout from './components/layouts';
import AboutPage from "./pages/about/index";
import HomePage from "./pages/home/index";
import ContactsPage from "./pages/contacts/index";
import LoginPage from "./pages/login/index";
import ObjectsPage from './pages/objects/index';
import CategoryPage from './pages/categorypodved/index';
import CardhouseDetailPage from './pages/cardhousedetail/index';

function App() {
  return (
    <Routes>
      <Route path='/' element= {<Layout />} >
        <Route index element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contacts' element={<ContactsPage />} />
        <Route path='objects' element={<ObjectsPage />} />
        <Route path='category' element={<CategoryPage />} />
        <Route path='cardhousedetail' element={<CardhouseDetailPage />} />
      </Route>
    </Routes>
  )
}

export default App;
