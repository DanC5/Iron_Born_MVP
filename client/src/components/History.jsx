import React, { Component } from 'react'
import styled from 'styled-components';

export default class History extends Component {
  render() {
    return (
      <Container>
        <h2>My Workout History</h2>
      </Container>
    )
  }
}

const Container = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 50%;
  min-height: 60%;
  box-shadow: 0 12px 24px rgba(0,0,0,0.22), 0 10px 10px rgba(0,0,0,0.20);
  border-radius: 5px;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  }
`;