import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Projects from './components/projects';
import Skills from './components/skills';
import Internships from './components/Internships';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Summary />
      <Projects />
      <Skills />
      <Internships />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
