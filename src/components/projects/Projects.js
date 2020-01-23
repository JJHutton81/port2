import React, { Component } from "react";

import Tabs from "./Tabs";
import Cards from "./Cards";

import styled from "styled-components";

import ProjectsGraphix from "../../media/projectsGraphic.png";
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
        <div>
          <Image src={ProjectsGraphix} alt="Logo" />
        </div>
        <div>
          <Tabs
            tabs={this.state.tabs}
            selectedTab={this.state.selected}
            selectTabHandler={this.changeSelected}
          />
          <Cards cards={this.filterCards()} />
        </div>
      </ProjectContainer>
    );
  }
}

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Image = styled.img`
  width: 30%;
  float: right;
  margin: 0% 6% 0% 0%;
`;
