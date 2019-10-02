import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';

import './landing.css';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggle: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({ isToggle: !this.state.isToggle });
  }

  render() {
    return (
      <div
        style={{ display: this.state.isToggle ? 'none' : 'flex' }}
        className='LPBody'
        onClick={this.handleClick}>
        <div class='stars' />
        <div class='twinkling' />
        <div class='clouds' />
        <div className='moon' />
        <div class='landingCard'>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={3000}>
            {props => <h1 style={props}>Hello, I'm James Hutton.</h1>}
          </Spring>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={5000}>
            {props => <h1 style={props}>I'm a full stack Web Developer.</h1>}
          </Spring>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={7000}>
            {props => <h1 style={props}>Coding is my Life.</h1>}
          </Spring>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={9000}>
            {props => <h1 style={props}>UI/UX is my Love.</h1>}
          </Spring>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={11000}>
            {props => <h1 style={props}>Click here to get started</h1>}
          </Spring>
        </div>
      </div>
    );
  }
}
