import React, { Component } from 'react';
import styled from 'styled-components';

import HeadGrapix from '../../media/headerGraphic.png';
import About from '../../media/aboutMeGraphic.png';
import Headshot from '../../media/headshot.jpg';
import Needle from '../../media/needle.png';

export default class AboutMe extends Component {
  render() {
    return (
      <Body>
        <HeadGraphic src={HeadGrapix} alt='Logo' />
        <GraphicWrap>
          <AboutFX src={About} alt='Logo' />
          <NeedleFX src={Needle} alt='Space Needle' />
          <TextWrap>
            <Head src={Headshot} alt='Headshot photo of James Hutton' />
            <Section>
              <P>
                Hello and thank you for visiting my website. I started my
                journey as a classically trained artist. As I grew older, I
                found myself getting pulled more and more to the
                modern/technical side of art, and became a graphic designer.
                Everything you see here is my own work. About ten years ago I
                moved to Seattle and gained an interest in web development. Now
                I’m a full-stack ReactJS developer who favors the front end. I
                have a passion for creating responsive, dynamic, fast, and most
                of all creative apps. I love clever animations and tricks that
                amplify the user experience. If you like what you see, hit me
                up. Let’s make something special together.{' '}
              </P>
            </Section>
          </TextWrap>
        </GraphicWrap>
      </Body>
    );
  }
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const HeadGraphic = styled.img`
  width: 100%;
`;

const AboutFX = styled.img`
  width: 30%;
  float: left;
  margin: 6% 0 3% 6%;
  @media (max-width: 1000px) {
    width: 80%;
    margin: 15% auto 5% auto;
  }
`;

const GraphicWrap = styled.div`
  background-size: contain;
  height: 500px;
  width: 99.8%;
  position: absolute;
  margin-top: 7%;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

const TextWrap = styled.div`
  display: flex;
  width: 80%;
  margin: 16% auto;
  background-color: white;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    margin: 1% auto;
  }
`;

const Head = styled.img`
  height: 280px;
  @media (max-width: 400px) {
    width: 95%;
  }
  @media (max-width: 1000px) and (min-width: 401px) {
    width: 200px;
  }
`;

const Section = styled.section`
  z-index: 1;
  background: white;
`;

const P = styled.p`
  font-size: 1.6rem;
  padding: 2.5%;
  text-align: justify;
  z-index: 1;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const NeedleFX = styled.img`
  width: 15%;
  height: 500px;
  margin-left: 6.5%;
  position: absolute;
  @media (max-width: 1000px) {
    display: none;
  }
`;
