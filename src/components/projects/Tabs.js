import React from "react";

import Tab from "./Tab";

import styled from "styled-components";

const Tabs = props => {
  return (
    <div>
      <Categories>
        {props.tabs.map((item, i) => (
          <Tab
            key={i}
            tab={item}
            selectedTab={props.selectedTab}
            selectTabHandler={props.selectTabHandler}
          />
        ))}
      </Categories>
    </div>
  );
};

export default Tabs;

const Categories = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2% auto;
  &:last-child {
    font-family: "Roboto", sans-serif;
    font-size: 2rem;
    justify-content: space-evenly;
    font-weight: bold;
    flex-direction: row;
    text-decoration: underline;
    &:hover {
      cursor: pointer;
    }
  }
`;
