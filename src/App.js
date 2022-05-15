import './index.css';
import React from 'react';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


function App() {
  return (
    
    <div>
      <Header />
      <Nav />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
    
  );
}

export default App;
