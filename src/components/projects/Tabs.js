import React from 'react';
import Popup from 'reactjs-popup';

import Tab from './Tab';
import '../../App.css';

import styled from 'styled-components';

const Tabs = props => {
  return (
    <Div>
      <Popup
        trigger={<button className="Btnf">Filter</button>}
        position='bottom center'
        on='hover'
        closeOnDocumentClick
        mouseLeaveDelay={0}
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

const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 3%;
  @media (min-width: 401px) and (max-width: 700px) {
    margin: 0;
  }
`
