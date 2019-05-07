import React, { Component } from 'react';
import Portal from '../utilities/Portal.jsx';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      modal: true,
      email: '',
      password1: '',
      password2: '',
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal,
    })
  }
  
  render() {
    const { modal, email, password1, password2 } = this.state;
    const { toggleModal } = this;

    return (
      <Portal>
        {modal &&
          <Container>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <Close onClick={toggleModal}>X</Close>
            </Link>
            <h1 style={{color: '#82d8d8'}}>Create an Account...</h1><br/>
            <FlexForm>
              <Input type='email' name='email' value={email} placeholder='Enter email address...'/><br/>
              <Input type='password1' name='password1' value={password1} placeholder='Enter password...'/><br/>
              <Input type='password2' name='password2' value={password2} placeholder='Verify password...'/><br/>
              <Button>Create</Button>
            </FlexForm>
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
  align-items: center;
  justify-content: center;
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

const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Input = styled.input`
  font-family: 'Bree Serif', serif;
  height: 1.5em;
  font-size: 1.5em;
  border-radius: 5px; 
`;

const Button = styled.button`
  background-color: #222;
  font-family: 'Bree Serif', serif;
  color: #82d8d8;
  border-radius: 28px;
	border: none;
	cursor: pointer;
	font-size: 25px;
	padding: 10px 60px;
  margin: 30px 0px;
	text-decoration: none;
  box-shadow: 0 12px 24px rgba(0,0,0,0.22), 0 10px 10px rgba(0,0,0,0.20);
  transition: all 0.3s ease;
  &:hover {
    background-color: #111;
    font-size: 2em;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  }
`;