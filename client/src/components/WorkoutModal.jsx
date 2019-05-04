import React, { Component } from 'react';
import styled from 'styled-components';
import Portal from '../utilities/Portal.jsx';

export default class WorkoutModal extends Component {
  render() {
    const { toggleModal } = this.props;

    return (
      <Portal>
        <Container>
          <Close onClick={toggleModal}>X</Close>
          <h1>I'm in a Portal Modal!</h1>
        </Container>
        <Background onClick={toggleModal} />
      </Portal>
    )
  }
}

const Background = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  opacity: 0.3;
  z-index: 2;
`;

const Container = styled.div`
  position: absolute;
  top: 120px;
  left: 0px;
  margin: 0px 20%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Bree Serif', serif;
  min-width: 60%;
  min-height: 70%;
  box-shadow: 0 12px 24px rgba(0,0,0,0.22), 0 10px 10px rgba(0,0,0,0.20);
  border-radius: 5px;
  transition: all 0.3s ease;
  z-index: 3;
  &:hover {
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  }
`;

const Close = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 30px;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 5px;
  border: none;
  color: #ff6961;
  &:hover {
    background-color: #f4f4f4;
  }
`;