import React, { Component } from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import css from "animate.css";

import "./skills.css";
import "../../App.css";

import SkillFX from "../../media/skillsGraphic.png";
import Paper from "../../media/paper.png";
import MidG2 from "../../media/midGraphic2.png";

import SkillsDeck from "./SkillsDeck";

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
        <MidG2img src={MidG2} alt="Background Image" />
        <SkillsFX src={SkillFX} alt="Logo" />

        <DivTextDeck>
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay={500}>
            <Text style={{ display: this.state.isToggle ? "none" : "flex" }}>
              <ScrollAnimation
                animateIn="fadeIn"
                animateOut="fadeOut"
                delay={1000}
              >
                <P>
                  I was contemplating how I would show off my skillset. I could
                  just list them off, but that would be boring. I could make a
                  chart, but that’s so common it might as well be boring. So why
                  not make it a little game? That’s way more fun.{" "}
                </P>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeIn"
                animateOut="fadeOut"
                delay={1500}
              >
                <H2>
                  To play simply click and hold on each card, then quickly drag
                  to the left or right and release. Swipe left or right if
                  you’re on a touchscreen device.{" "}
                </H2>
              </ScrollAnimation>
              <Div>
                <button className="btn" onClick={this.handleClick}>
                  Dismiss
                </button>
              </Div>
            </Text>
          </ScrollAnimation>
          <DeckWrap>
            <SkillsDeck />
          </DeckWrap>
        </DivTextDeck>
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

const DivTextDeck = styled.div`
  display: flex;
  justify-content: space evenly;
  position: absolute;
  margin-top: 10%;
`;

const MidG2img = styled.img`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: -1;
`;

const SkillsFX = styled.img`
  width: 30%;
  float: left;
  margin: 6% 0 0% 6%;
  align-self: flex-start;
  @media (max-width: 400px) {
    width: 80%;
    margin: 15% auto 5% auto;
  }
  @media (min-width: 401px) and (max-width: 700px) {
    margin: 0% auto 5% auto;
    width: 80%;
  }

`;

const Text = styled.div`
  align-self: flex-start;
  margin: 10% 0 0 13%;
  width: 27%;
  background-image: url(${Paper});
  background-size: 100% 100%;
  padding: 3%;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  text-align: center;
  @media (max-width: 1600px) {
    height 49vh;
  }
  @media (max-width: 1550px) {
    height 50vh;
  }
  @media (max-width: 1450px) {
    height 54vh;
  }
  @media (max-width: 1350px) {
    height 44vh;
  }
  @media (max-width: 1349px) and (min-width: 1001px) {
    height 57vh;
  }
  @media (max-width: 1000px) {
    width: 75%;
    height: 75vh;
  }
  @media (min-width: 401px) and (max-width: 700px) {
    height: 55vh;
    margin-top: 25%;
  }
  @media (max-width: 400px) {
    height 58vh;
    margin-top: 50%;
  }
`;

const P = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2%;
  font-family: "Roboto", sans-serif;
  @media (max-width: 500px) {
    font-size: 1rem;
    margin-bottom: 8%;
    line-height: 1.5;
  }
`;

const H2 = styled.h2`
  font-weight: bold;
  font-size: 1.2rem;
  font-family: "Roboto", sans-serif;
  margin-bottom: 2%;
  @media (max-width: 500px) {
    font-size: 1rem;
    margin-bottom: 6%;
    line-height: 1.5;
  }
`;

const DeckWrap = styled.div`
  width: 100%;
  height: 75.1vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 400px) {
    margin-top: 12%;
  }
  @media (min-width: 401px) and (max-width: 700px) {
    margin-top: 13%;
  }
`;

const Div = styled.div`
  width: 50%;
  margin: 2% auto;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
