import React, { Component } from 'react';

import './skills.css';

import SkillFX from '../../media/skillsGraphic.png';

import SkillsDeck from './SkillsDeck';

export default class Skills extends Component {
  render() {
    return (
      <div className='page-wrap'>
        <img className='skillsFX' src={SkillFX} alt='Logo' />
        <div className='skillText'>
          <p>
            I was contemplating how I would list off my skillset. I could just
            list them off, but that would be boring. I could make a chart, but
            that’s so common it might as well be boring. So why not make it a
            little game? That’s way more fun.{' '}
          </p>
          <h2>
            To play simply click and hold on each card, then quickly drag to the
            left or right and release. Swipe left or right if you’re on a
            touchscreen device.{' '}
          </h2>
        </div>
        <div className='skills-deck-wrap'>
          <SkillsDeck />
        </div>
      </div>
    );
  }
}
