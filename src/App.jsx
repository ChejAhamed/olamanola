import React from 'react';
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Dashboard from './pages/Dashboard/Dashboard';
import Contactus from './pages/Contactus/Contactus';
import Services from './pages/Servicess/Services';
import Gallery from './pages/Gallery/Gallery';
import './App.css';

const App = function () {
  return (
    
    <><Router>
    
        <Header />
        <Routes>


          <Route path="/" element={<Dashboard/>} />
          <Route path="/contactus" element={<Contactus/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/gallery" element={<Gallery/>} />


        </Routes>
        <Footer />
      
    </Router>
    </>
  );
};

export default App;
