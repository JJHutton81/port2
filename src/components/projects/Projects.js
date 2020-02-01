import React, { Component } from "react";

import Tabs from "./Tabs";
import Cards from "./Cards";

import styled from "styled-components";

import ProjectsGraphix from "../../media/projectsGraphic.png";
// import MidG2 from "../../media/midGraphic2.png";
import MidG1 from "../../media/midGraphic1.png";
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
        <MidG1img src={MidG1} alt="Background Image" />
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

const MidG1img = styled.img`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: -1;
`;

const Image = styled.img`
  width: 30%;
  float: left;
  margin: 6% 0 3% 6%;
  @media (max-width: 400px) {
    width: 80%;
    margin: 15% auto 5% auto;
  }
  @media (min-width: 401px) and (max-width: 700px) {
    margin: 0% auto 5% auto;
    width: 80%;
  }
  @media (min-width: 701px) and (max-width: 1000px) {
    width: 40%;
  }
`;

const LogoDiv = styled.div`
  width: 100%;
  display: flex;
`

const Div = styled.div`
  @media (max-width: 500px) {
    width: 100%;
    height: 418px;
    overflow: auto;
  }
`