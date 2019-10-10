import React, { Component } from 'react';
import { Spring, Transition, animated, config } from 'react-spring/renderprops';

import './contact.css';

import ContactGrapfix from '../../media/contactGraphic.png';
import Foot from '../../media/footGraphic.png';

export default class Contact extends Component {
  render() {
    return (
      <div className='ContactBody'>
        <div className='title'>
          <img className='contact_FX' src={ContactGrapfix} alt='Logo'></img>
        </div>
        <div>
          {/* <h1 className='ContactTitle'>
            This site is under almost constant construction. Check back often
            for more clever little transitions, animations, and projects.{' '}
          </h1>
          <h1 className='ContactTitle'>
            Do you have any questions, comments, or want to work with me?
          </h1>
          <h1 className='ContactTitle'>Let's make something special.</h1> */}
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
            <div className='btnWrap'>
              <button type='submit' className='Btn'>
                Submit
              </button>
            </div>
          </form>
        </div>
        <img className='footer' src={Foot} alt='Logo'></img>
      </div>
    );
  }
}
