import React, { Component } from 'react';

import styled from 'styled-components';

import LiLogo from '../../media/LI-Logo.png';
import GhLogo from '../../media/github.png';
import TLogo from '../../media/twitter.png';

export default class Footer extends Component {
    render() {
        return(
            <Div>
                <H1>Follow me on</H1>
                <a href="https://www.linkedin.com/in/james-hutton-87a82b183/"
                  target="_blank"
                  rel="noopener noreferrer">
                    <Image src={LiLogo} alt="Linked in logo" />  
                </a>
                <a href="https://github.com/FreeKeyBoy?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer">
                    <Image src={GhLogo} alt="Github logo" />  
                </a>
                <a href="https://twitter.com/JamesHu91877325"
                  target="_blank"
                  rel="noopener noreferrer">
                    <ImageT src={TLogo} alt="Twitter logo" />  
                </a>
            </Div>
        )
    }
}

const Div = styled.div`
display: flex;
background: black;
width: 100%;
justify-content: space-around;
align-items: center;
z-index: 3;
`

const H1 = styled.h1`
color: white;
font-family: 'Roboto', sans-serif;
font-size: 1.6rem;
margin: 1.5% 0;
`

const Image = styled.img`
height: 40px;
`

const ImageT = styled.img`
height: 100px;
`