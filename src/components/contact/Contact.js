import React, { Component } from 'react';
import { Spring, Transition, animated, config } from 'react-spring/renderprops';

import './contact.css';

import ContactGrapfix from '../../media/contactGraphic.png';
import Foot from '../../media/footGraphic.png';

export default class Contact extends Component {
  state = { index: 0 };
  toggleContact = e =>
    this.setState(state => ({
      index: state.index === 1 ? 0 : state.index + 1
    }));
  toggleBackContact = e =>
    this.setState(state => ({
      index: state.index === 1 ? 0 : state.index - 1
    }));
  render() {
    const pages = [
      style => (
        <animated.div style={{ ...style }} className='ContactWrap'>
          <h1 className='ContactTitle'>
            This site is under almost constant construction. Check back often
            for more clever little transitions, animations, and projects.{' '}
          </h1>
          <h1 className='ContactTitle'>
            Do you have any questions, comments, or want to work with me?
          </h1>
          <span className='PsudoButt' onClick={this.toggleContact}>
            Contact Me
          </span>
          <h1 className='ContactTitle'>Let's make something special.</h1>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className='ContactWrap'>
          <form
            className='form-body'
            method='POST'
            action='https://formspree.io/jjhutton81@gmail.com'>
            <input
              type='email'
              name='email'
              placeholder='Enter Your Email'
              className='form-input'
            />
            <textarea
              name='message'
              contenteditable='true'
              placeholder="What's on your mind?"
              wrap='soft'
              className='form-text'
            />
            <button type='submit' className='Btn'>
              Submit
            </button>
            <span className='PsudoButt' onClick={this.toggleBackContact}>
              Close
            </span>
          </form>
        </animated.div>
      )
    ];
    return (
      <div className='ContactBody'>
        <div className='title'>
          <img className="contact_FX" src={ContactGrapfix} alt='Logo'></img>
        </div>

        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          delay={3000}
          config={config.molasses}>
          {props => (
            <div className='TransitionWrap' style={props}>
              <Transition
                native
                reset
                unique
                items={this.state.index}
                from={{ opacity: 0, transform: 'scale3d(0, 0, 0)' }}
                enter={{ opacity: 1, transform: 'scale3d(1, 1, 1)' }}
                leave={{ opacity: 0, transform: 'scale3d(0, 0, 0)' }}>
                {index => pages[index]}
              </Transition>
            </div>
          )}
        </Spring>
        <img className="footer" src={Foot} alt="Logo"></img>
      </div>
    );
  }
}
