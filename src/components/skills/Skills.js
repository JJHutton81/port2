import React, { Component } from 'react';
import styled from 'styled-components';

import './skills.css';

import SkillFX from '../../media/skillsGraphic.png';
import Paper from "../../media/paper.jpg"

import SkillsDeck from './SkillsDeck';

export default class Skills extends Component {
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
      <Body>
        <SkillsFX src={SkillFX} alt='Logo' />
        <Text  style={{ display: this.state.isToggle ? 'none' : 'flex' }}>
          <P>
            I was contemplating how I would list off my skillset. I could just
            list them off, but that would be boring. I could make a chart, but
            that’s so common it might as well be boring. So why not make it a
            little game? That’s way more fun.{' '}
          </P>
          <H2>
            To play simply click and hold on each card, then quickly drag to the
            left or right and release. Swipe left or right if you’re on a
            touchscreen device.{' '}
          </H2>
          <button className="btn btn-1 btn-1b" onClick={this.handleClick}>Dismiss</button>
        </Text>
        <DeckWrap>
          <SkillsDeck />
        </DeckWrap>
      </Body>
    );
  }
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
`;

const SkillsFX = styled.img`
width: 30%;
float: right;
margin: 0;
position: absolute;
@media (max-width: 768px) {
  width: 80%;
  margin: 10% auto;
}
`

const Text = styled.div`
position: absolute;
margin: 10% auto;
width: 35%;
height: 37vh;
background-image: url(${Paper});
background-size: 100% 100%;
padding: 10%;
flex-direction: column;
z-index: 1;
text-align: center;
`

const P = styled.p`
font-size: 1.6rem;
margin-bottom: 2%;
font-family: 'Roboto', sans-serif;
`

const H2 = styled.h2`
font-weight: bold;
font-size: 1.6rem;
font-family: 'Roboto', sans-serif;
`

const DeckWrap = styled.div`
width: 100%;
height: 75.1vh;
display: flex;
justify-content: center;
align-items: center;
margin-top: 2%;
`