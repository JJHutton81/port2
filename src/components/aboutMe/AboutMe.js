import React, { Component } from 'react';

import './about_me.css';

import HeadGrapix from '../../media/headerGraphic.png';
import About from '../../media/aboutMeGraphic.png';
import Headshot from '../../media/headshot.jpg';
import Accent from '../../media/tileAccentLeft.png';

export default class AboutMe extends Component {
  render() {
    return (
      <div className='aboutMeBody'>
        <img className='headImg' src={HeadGrapix} alt='Logo' />
        <div className='spaceNeedleHolder'>
          <img className='aboutFX' src={About} alt='Logo' />
          <div className='aboutHeadText'>
            <img
              // className='head'
              src={Headshot}
              alt='Headshot photo of James Hutton'
            />
            <section>
              <p>
                Hello again, and thank you for visiting my website. I started my
                journey as a classically trained artist. As I grew older, I
                found myself getting pulled more and more to the more
                modern/technical side of art, and became a graphic designer.
                Everything you see here is my own work. About ten years ago I
                moved to Seattle and gained an interest in web development. Now
                I’m a full-stack ReactJS developer who favors the front end. I
                have a passion for creating responsive, dynamic, fast, and most
                of all creative apps. I love clever animations and tricks that
                amplify the user experience. If you like what you see, hit me
                up. Let’s make something special together.{' '}
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
