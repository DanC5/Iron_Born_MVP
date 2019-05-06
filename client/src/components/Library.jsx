import React, { Component } from 'react'
import styled from 'styled-components';
import Portal from '../utilities/Portal.jsx';
import Exercises from './Exercises.jsx';
import { Link } from 'react-router-dom';
import { push, pull, core, legs } from '../utilities/exercises.js';

export default class Library extends Component {
  constructor() {
    super();
    this.state = {
      modal: true,
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal,
    })
  }

  render() {
    const { modal } = this.state;
    const{ toggleModal } = this;

    return (
      <Portal>
        {modal &&
          <Container>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <Close onClick={toggleModal}>X</Close>
            </Link>
            <h1 style={{color: '#82d8d8'}}>Exercise Library</h1>
            <h2 style={{marginTop: '-8px'}}>Upper-body Push</h2>
            <Exercises exercises={push}/>
            <h2>Upper-body Pull</h2>
            <Exercises exercises={pull}/>
            <h2>Core</h2>
            <Exercises exercises={core}/>
            <h2>Legs</h2>
            <Exercises exercises={legs}/>
          </Container>
        }
        <Link to='/' style={{ textDecoration: 'none' }}>
            <Background onClick={toggleModal}/>
        </Link>
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
  padding-bottom: 40px;
  overflow: scroll;
  background-color: #fff;
  display: flex;
  /* justify-content: flex-start; */
  align-items: center;
  flex-direction: column;
  font-family: 'Bree Serif', serif;
  min-width: 60%;
  min-height: 60%;
  max-height: 75%;
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
  font-size: 25px;
  padding: 5px 12px;
  margin: 5px;
  background-color: #fff;
  border-radius: 5px;
  border: none;
  color: #ff6961;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #f4f4f4;
    border: 1px solid #ff6961;
  }
`;