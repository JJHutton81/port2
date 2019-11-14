import React from "react";

import styled from "styled-components";
import Popup from "reactjs-popup";

import GitHub from "../../media/github.png";

import "../../App.css";

const Card = props => {
  return (
    <CardBody>
      <Headline>{props.card.headline}</Headline>
      <ImgCont>
        <a href={props.card.plink} target="_blank" rel="noopener noreferrer">
          <Image src={props.card.img} alt="Project Screenshot" />
        </a>
      </ImgCont>
      <Popup
        trigger={open => <Button>{open ? "Close" : "Learn More"}</Button>}
        position="bottom center"
        closeOnDocumentClick
      >
        <H3>{props.card.text}</H3>
        <Div>
            <H4>View repository on</H4>
        <A href={props.card.rlink} target="_blank" rel="noopener noreferrer">
          <Logo className="GHLogo" src={GitHub} alt="Git Hub Logo" />
        </A>
        </Div>
      </Popup>
    </CardBody>
  );
};

export default Card;

const CardBody = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2% 1%;
  border: 1px solid #cccccc;
  padding: 0.5%;
  -webkit-box-shadow: 0px 5px 15px 1px #000000;
  box-shadow: 0px 5px 15px 1px #000000;
`;

const Headline = styled.h2`
  font-weight: bold;
  font-size: 1.6rem;
  font-family: "Roboto", sans-serif;
  margin: 1%;
`;

const ImgCont = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
`;

const Logo = styled.img`
  width: 80%;
  margin: 1% auto;
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
padding: 2%;
width: 100%;
`

const A = styled.a`
  margin: 1% auto;
  display: flex;
  width: 100%;
`;

const Button = styled.button`
  border-radius: 8px;
  font-size: 1.2rem;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  margin: 1%;
  padding: 1%;
  background-color: light-grey;
  &:hover {
      cursor: pointer;
  }
`;

const Div = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border-top: 1px solid #cccccc;
  padding: 1%;
`