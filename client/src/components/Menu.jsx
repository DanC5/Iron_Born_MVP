import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <Container>
      <Card>
        <Link to='/create' style={{ textDecoration: 'none' }}>
          <Title2>Create Workout</Title2>
        </Link>
      </Card>
      <Card>
        <Link to='/history' style={{ textDecoration: 'none' }}>
          <Title2>My Workout History</Title2>
        </Link>
      </Card>
      <Card>
        <Link to='/library' style={{ textDecoration: 'none' }}>
          <Title2>Exercise Library</Title2>
        </Link>
      </Card>
    </Container>
  )
}

const Title2 = styled.h2`
  cursor: pointer;
  color: #fff;
  &:hover {
    color: #82d8d8;
  }
`;

const Container = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-evenly;
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

const Card = styled.div`
  height: 100px;
  width: 67%;
  background-color: #222;
  color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  font-family: 'Helvetica Neue';
  box-shadow: 0 10px 20px rgba(0,0,0,0.20), 0 10px 10px rgba(0,0,0,0.18);
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    color: #82d8d8;
    font-family: 'Bree Serif', serif;
    font-size: 1.5em;
    cursor: pointer;
    background-color: #111;
  }
`;