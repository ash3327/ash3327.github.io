import React from 'react';
import logo from './images/logo.svg';
import './App.css';
import MainSlideshow from './pages/MainSlideshow';
import MenuBar from './pages/MenuBar'
import About from './pages/About'
import ProjectShowcase from './pages/ProjectShowcase';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App h-screen">
      <MenuBar />
      <MainSlideshow />
      <About />
      <ProjectShowcase/>
      <Footer/>
    </div>
  );
}

export default App;
