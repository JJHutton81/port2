import React from 'react';

// import Landing from './landing/Landing';
import AboutMe from './components/aboutMe/AboutMe';
import Menu from "./components/menu/Menu";

import './App.css';

function App() {
  return (
    <div className='App'>
      {/* <Landing /> */}
      <Menu />
      <AboutMe />
    </div>
  );
}

export default App;
