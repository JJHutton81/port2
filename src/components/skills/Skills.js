import React, { Component } from "react";
import styled from "styled-components";

import "./skills.css";
import "../../App.css";

import SkillFX from "../../media/skillsGraphic.png";
import Paper from "../../media/paper.png";
import MidG1 from "../../media/midGraphic1.png";

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
        <MidG1img src={MidG1} alt="Background Image" />
        <SkillsFX src={SkillFX} alt="Logo" />
        <Text style={{ display: this.state.isToggle ? "none" : "flex" }}>
          <P>
            I was contemplating how I would show off my skillset. I could just
            list them off, but that would be boring. I could make a chart, but
            that’s so common it might as well be boring. So why not make it a
            little game? That’s way more fun.{" "}
          </P>
          <H2>
            To play simply click and hold on each card, then quickly drag to the
            left or right and release. Swipe left or right if you’re on a
            touchscreen device. Click the button below to get started.{" "}
          </H2>
          <Div>
            <button className="btn" onClick={this.handleClick}>
              Dismiss
            </button>
          </Div>
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

const MidG1img = styled.img`
  position: absolute;
  width: 100%;
  height: 100vh;
`;

const SkillsFX = styled.img`
  width: 30%;
  float: right;
  margin: 0;
  position: absolute;
  @media (max-width: 1000px) {
    width: 80%;
    margin: 20% auto;
  }
`;

const Text = styled.div`
  position: absolute;
  margin: 10% auto;
  width: 35%;
  height: 37vh;
  background-image: url(${Paper});
  background-size: 100% 100%;
  padding: 10%;
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
  @media (max-width: 500px) {
    height 58vh;
    margin-top: 50%;
  }
`;

const P = styled.p`
  font-size: 1.6rem;
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
  font-size: 1.6rem;
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
  margin-top: 2%;
  @media (max-width: 500px) {
    margin-top: 12%;
  }
`;

const Div = styled.div`
  width: 50%;
  margin: 2% auto;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
