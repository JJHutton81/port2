import React, { Component } from 'react';

import Card from './Card';

import styled from "styled-components";

class Cards extends Component {
  constructor(props) {
    super(props);
     this.state = {
      cards: props.cards
    }
  }
  
  render() {  
    return (
      <CardsWrapper>
        {this.props.cards.map((card, index) => <Card key = {index} card = {card} />)}
      </CardsWrapper>
    )
  }
}

export default Cards;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`