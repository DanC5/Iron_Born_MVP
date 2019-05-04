import React, { Component } from 'react'
import styled from 'styled-components';
import { workoutGenerator } from '../utilities/exercises.js';

export default class App extends Component {

  render() {

    return (
      <div id='main'>
        <Header>
          <h1>Iron Born</h1>
        </Header>
        <Container>
          <Card>
            <h2>Generate</h2>
            <h2>History</h2>
            <h2>Library</h2>
          </Card>
        </Container>
      </div>
    )
  }
}

const Header = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222;
  color: #82d8d8;
  font-family: 'Helvetica Neue';
  font-size: 1.3em;
  box-shadow: 0 12px 24px rgba(0,0,0,0.22), 0 10px 10px rgba(0,0,0,0.20);
  z-index: 2;
`;

const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 500px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
`;

const Card = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  min-width: 50%;
  min-height: 50%;
  box-shadow: 0 12px 24px rgba(0,0,0,0.22), 0 10px 10px rgba(0,0,0,0.20);
  border-radius: 5px;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  }
`;