import React from 'react';
import Popup from 'reactjs-popup';

import Tab from './Tab';

import styled from 'styled-components';

const Tabs = props => {
  return (
    <div>
      <Popup
        trigger={<p>Filter</p>}
        position='bottom center'
        on='hover'
        closeOnDocumentClick
        mouseLeaveDelay={300}
        mouseEnterDelay={0}
        contentStyle={{ padding: '1%', border: 'none', display: 'flex', flexDirection: 'column', height: '300px'}}
        arrow={false}>
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
    </div>
  );
};

export default Tabs;

const Categories = styled.div`
  flex-direction: column;
  width: 100%;
  margin: 2% auto;
  display: flex;
  &:last-child {
    font-family: 'Roboto', sans-serif;
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
