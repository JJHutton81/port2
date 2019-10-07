import React, { Component } from 'react';

import './skills.css';

import SkillFX from '../../media/skillsGraphic.png';

import SkillsDeck from './SkillsDeck';

export default class Skills extends Component {
  render() {
    return (
      <div className='page-wrap'>
          <img className='skillsFX' src={SkillFX} alt='Logo' />
        <div className='skills-deck-wrap'>
          <SkillsDeck />
        </div>
      </div>
    );
  }
}
