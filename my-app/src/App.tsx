import React from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import './App.css';

import MenuBar from './pages/parts/MenuBar';
import Home from './pages/Home';
import Footer from './pages/parts/Footer';
import Aboutme from './pages/Aboutme';
import Experience2 from './pages/Experience-2';

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  const showFooter = location.pathname !== '/experience';

  return (
    <div className="App flex flex-col min-h-screen"> 
      <MenuBar />
      <section className="mt-16">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="aboutme" element={<Aboutme />} />
          <Route path="experience" element={<Experience2 />} />
        </Routes>
      </section>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;