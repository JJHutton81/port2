import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
// import ScrollAnimation from "react-animate-on-scroll";
import css from "animate.css";

import styled from "styled-components";
import Popup from "reactjs-popup";

import GitHub from "../../media/GitHub_Logo.png";

import "../../App.css";

const Card = props => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });
  return (
    // <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut" delay={1000}>
      <CardBody
        onMouseEnter={() => set(state => !state)}
        onMouseLeave={() => set(state => !state)}
      >
        <a.div
          class="back"
          style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
        >
          <Headline>{props.card.headline}</Headline>
          <ImgCont>
            <a
              href={props.card.plink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={props.card.img} alt="Project Screenshot" />
            </a>
          </ImgCont>
        </a.div>
        <a.div
          class="front"
          style={{
            opacity,
            transform: transform.interpolate(t => `${t} rotateX(180deg)`)
          }}
        >
          <Div>
            <H3>{props.card.text}</H3>
            <H4>{props.card.stack}</H4>
            <Ul>
              <Li>{props.card.bullet1}</Li>
              <Li>{props.card.bullet2}</Li>
              <Li>{props.card.bullet3}</Li>
            </Ul>
            <GitLink>
              <H4>View repository on</H4>
              <a
                href={props.card.rlink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Logo className="GHLogo" src={GitHub} alt="Git Hub Logo" />
              </a>
            </GitLink>
          </Div>
        </a.div>
      </CardBody>
    // </ScrollAnimation>
  );
};

export default Card;

const CardBody = styled.div`
  width: 450px;
  height: 357px;
  display: flex;
  flex-direction: column;
  background: white;
  align-items: center;
  border: 1px solid #cccccc;
  @media (min-width: 401px) and (max-width: 700px) {
    margin: 1%;
  }
`;

const Div = styled.div`
  width: 450px;
  height: 350px;
  display: flex;
  background: white;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
`;

const GitLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Headline = styled.h2`
  font-weight: bold;
  font-size: 1.6rem;
  font-family: "Roboto", sans-serif;
  margin: 1%;
  text-align: center;
  background: white;
  line-height: 1.4;
  height: 36px;
`;

const ImgCont = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 307px;
`;

const Logo = styled.img`
  width: 130px;
  height: 50px;
`;

const H3 = styled.h3`
  font-size: 1.4rem;
  font-family: "Roboto", sans-serif;
  text-align: center;
  padding: 2%;
`;

const H4 = styled.h4`
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  text-align: center;
  width: 100%;
`;

const Li = styled.li`
  font-size: 0.9rem;
  font-family: "Roboto", sans-serif;
`;

const Ul = styled.ul`
  list-style: circle;
  padding-left: 5%;
  margin-bottom: 1%;
`;
