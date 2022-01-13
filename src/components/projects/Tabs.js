import React from "react";
import Popup from "reactjs-popup";

import Tab from "./Tab";
import "../../App.css";

import styled from "styled-components";

const Tabs = props => {
  return (
    <Div>
      <Popup
        trigger={<Button>Filter By Category</Button>}
        position="bottom center"
        on="hover"
        closeOnDocumentClick
        mouseLeaveDelay={0}
        mouseEnterDelay={0}
        contentStyle={{
          padding: "1%",
          border: "none",
          display: "flex",
          flexDirection: "column",
          height: "300px"
        }}
        arrow={false}
      >
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
      </Popup>
    </Div>
  );
};

export default Tabs;

const Categories = styled.div`
  flex-direction: column;
  width: 100%;
  margin: 2% auto;
  display: flex;
  &:last-child {
    font-family: "Roboto", sans-serif;
    font-size: 2rem;
    justify-content: space-evenly;
    font-weight: bold;
    // flex-direction: row;
    text-decoration: underline;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Button = styled.button`
  height: 6vh;
  width: 14vw;
  font-size: 150%;
  background-color: rgba(205, 205, 205, 0.6);
  border: 2px solid rgba(205, 205, 205, 0.8);
  border-radius: 5px;
`;

const Div = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 2;
  justify-content: center;
  margin: 14% 0 3% 0;
  @media (min-width: 401px) and (max-width: 700px) {
    margin: 0;
  }
`;
