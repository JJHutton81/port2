import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import YouTube from 'react-youtube';

import JOBD1 from '../../media/JOBD1.png';
import JOBD2 from '../../media/JOBD2.png';
import JOBD3 from '../../media/JOBD3.png';
import JOBD4 from '../../media/JOBD4.png';
import JOBD5 from '../../media/JOBD5.png';
import JOBD6 from '../../media/JOBD6.png';

import './jobdCarousel.css';

export default class JOBDCarousel extends Component {
  render() {
    const opts = {
      height: '400',
      width: '650',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
      <div className='CarouselWrap'>
        <Carousel
          autoPlay
          transitionTime='2000'
          interval='8000'
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}>
          <div className='SlideWrap'>
            <img className='Slide' src={JOBD1} alt='Slide 1' />
          </div>
          <div className='SlideWrap'>
            <img className='Slide' src={JOBD2} alt='Slide 2' />
          </div>
          <div className='SlideWrap'>
            <img className='Slide' src={JOBD3} alt='Slide 3' />
          </div>
          <div className='SlideWrap'>
            <img className='Slide' src={JOBD4} alt='Slide 4' />
          </div>
          <div className='SlideWrap'>
            <img className='Slide' src={JOBD5} alt='Slide 5' />
          </div>
          <div className='SlideWrap'>
            <img className='Slide' src={JOBD6} alt='Slide 6' />
          </div>
          <div className='SlideWrap'>
            <YouTube
              videoId='hYpkHf8hONU'
              opts={opts}
              onReady={this._onReady}
            />
          </div>
        </Carousel>
      </div>
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
