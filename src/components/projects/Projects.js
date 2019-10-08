import React, { Component } from 'react';
// import { Spring } from "react-spring/renderprops";

import './projects.css';

import ProjectsGraphix from '../../media/projectsGraphic.png';

import JOBDPop from './JOBDPop';
import NTAPop from './NTAPop';

export default class HomeBody extends Component {
  render() {
    return (
      <div className='title'>
        <img className="project_FX" src={ProjectsGraphix} alt="Logo"/>

        <div class='cardWrapper'>
          <div className='cardContainer'>
            <JOBDPop />
            <NTAPop />
          </div>
        </div>
      </div>
    );
  }
}
