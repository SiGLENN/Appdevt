import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Gallery from './components/Gallery'; 
import './App.css'; 
import { useState } from 'react';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Gallery /> 
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
