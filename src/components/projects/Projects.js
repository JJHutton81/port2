import React, { Component } from 'react';
// import { Spring } from "react-spring/renderprops";

import './projects.css';

import JOBDPop from './JOBDPop';
import NTAPop from './NTAPop';

export default class HomeBody extends Component {
  render() {
    return (
      <div className='title'>
        <h1>Projects</h1>

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
