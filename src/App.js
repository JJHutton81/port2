import React from 'react';

// import Landing from './landing/Landing';
import AboutMe from './components/aboutMe/AboutMe';
import Menu from "./components/menu/Menu";
import Skills from "./components/skills/Skills";
import Contact from './components/contact/Contact';

import './App.css';

function App() {
  return (
    <div className='App'>
      {/* <Landing /> */}
      <Menu />
      <AboutMe />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
