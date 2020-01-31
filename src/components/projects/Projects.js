import React, { Component } from "react";

import Tabs from "./Tabs";
import Cards from "./Cards";

import styled from "styled-components";

import ProjectsGraphix from "../../media/projectsGraphic.png";
import MidG2 from "../../media/midGraphic2.png";
import { tabData, cardData } from "../../ProjectData";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "All",
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({ tabs: tabData, cards: cardData });
  }

  changeSelected = tab => {
    this.setState({ selected: tab });
  };

  filterCards = () => {
    if (this.state.selected === "All") {
      return this.state.cards;
    } else {
      const cards = this.state.cards.filter(
        card => card.tab === this.state.selected
      );
      return cards;
    }
  };

  render() {
    return (
      <ProjectContainer>
        <MidG2img src={MidG2} alt="Background Image" />
        <LogoDiv>
          <Image src={ProjectsGraphix} alt="Logo" />
        </LogoDiv>
        <div>
          <Tabs
            tabs={this.state.tabs}
            selectedTab={this.state.selected}
            selectTabHandler={this.changeSelected}
          />
          <Div>
            <Cards cards={this.filterCards()} />
          </Div>  
        </div>
      </ProjectContainer>
    );
  }
}

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const MidG2img = styled.img`
  position: absolute;
  width: 100%;
  z-index: -1
  height: 100vh;
`;

const Image = styled.img`
  width: 30%;
  float: right;
  margin: 0% 6% 0% 0%;
  @media (max-width: 400px) {
    width: 80%;
    margin: 20% 0 2% 0;
  }
  @media (min-width: 401px) and (max-width: 700px) {
    width: 80%;
    margin: 0;
  }
`;

const LogoDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Div = styled.div`
  @media (max-width: 500px) {
    width: 100%;
    height: 418px;
    overflow: auto;
  }
`