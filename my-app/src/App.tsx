import React from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from './theme';

import './styles/App.css';

import MenuBar from './components/layout/MenuBar';
import Footer from './components/layout/Footer';
import Home from './pages/Home/Home';
import Aboutme from './pages/About/Aboutme';
import Experience2 from './pages/Projects/Experience-2';

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
    <ThemeProvider theme={darkTheme}>
      <div className="App flex flex-col min-h-screen">
        <MenuBar />
        <section className="mt-16">
          <TransitionGroup>
            <CSSTransition
              key={location.pathname}
              classNames="page"
              timeout={300}
            >
              <Routes>
                <Route path="" element={<Home />} />
                <Route path="aboutme" element={<Aboutme />} />
                <Route path="experience" element={<Experience2 />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </section>
        {showFooter && <Footer />}
      </div>
    </ThemeProvider>
  );
}

export default App;