import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import MenuBar from './pages/parts/MenuBar'
import Home from './pages/Home';
import Footer from './pages/parts/Footer';
import Experience from './pages/Experience';
import { scrollToAnchorOnLoad } from './utils/smoothScroll';

function App() {
  useEffect(() => {
      scrollToAnchorOnLoad(); // Call the function on component mount
  }, []);

  return (
    <Router>
      <div className="App flex flex-col min-h-screen"> 
        <MenuBar />
        <section className="mt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
