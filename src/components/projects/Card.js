import React from 'react';

import styled from 'styled-components';
import Popup from 'reactjs-popup';

import GitHub from '../../media/GitHub_Logo.png';

import '../../App.css';

const Card = props => {
  return (
    <CardBody>
      <Headline>{props.card.headline}</Headline>
      <Popup
        trigger={
          <ImgCont>
            <a
              href={props.card.plink}
              target='_blank'
              rel='noopener noreferrer'>
              <Image src={props.card.img} alt='Project Screenshot' />
            </a>
          </ImgCont>
        }
        position='bottom center'
        on='hover'
        closeOnDocumentClick
        mouseLeaveDelay={300}
        mouseEnterDelay={0}>
        <H3>{props.card.text}</H3>
        <H4>{props.card.stack}</H4>
        <Ul>
          <Li>{props.card.bullet1}</Li>
          <Li>{props.card.bullet2}</Li>
          <Li>{props.card.bullet3}</Li>
        </Ul>
        <Div>
          <H4>View repository on</H4>
          <A href={props.card.rlink} target='_blank' rel='noopener noreferrer'>
            <Logo className='GHLogo' src={GitHub} alt='Git Hub Logo' />
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
  text-align: center;
  text-shadow: -1px 1px 20px #fa1633;
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
`;

const H3 = styled.h3`
  font-size: 1.4rem;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  padding: 2%;
`;

const H4 = styled.h4`
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  padding: 2%;
  width: 100%;
`;

const Li = styled.li`
  font-size: .9rem;
  font-family: 'Roboto', sans-serif;
`

const A = styled.a`
  margin: 1% auto;
  display: flex;
  width: 100%;
`;

const Div = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #cccccc;
  padding: 2%;
  margin-top: 2%;
`;

const Ul = styled.ul`
  list-style: circle;
  padding-left: 5%;
`