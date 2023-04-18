import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Layout from './components/layouts';
import AboutPage from "./pages/about/index";
import HomePage from "./pages/home/index";
import ContactsPage from "./pages/contacts/index";
import LoginPage from "./pages/login/index";
import ObjectsPage from './pages/customers/index';
import CategoryPage from './pages/categorypodved/index';
import CardhouseDetailPage from './pages/cardhousedetail/index';
import CardhousePage from './pages/cardhouse/index';
import SearchPage from './pages/search';
import ReportsPage from './pages/reports';

function App() {
  return (
    <Routes>
      <Route path='login' element={<LoginPage />} />
      <Route path='/' element= {<Layout />} >
        <Route index element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contacts' element={<ContactsPage />} />
        <Route path='search' element={<SearchPage />} />
        <Route path='reports' element={<ReportsPage />} />
        <Route path='customers' element={<ObjectsPage />} />
        <Route path='category' element={<CategoryPage />} />
        <Route path='cardhousedetail/:id/' element={<CardhouseDetailPage />} />
        <Route path='cardhouse/:id/' element={<CardhousePage />} />
      </Route>
    </Routes>
  )
}

export default App;
