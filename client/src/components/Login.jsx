import React, { Component } from 'react';
import Portal from '../utilities/Portal.jsx';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
      email: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;

    fetch(`/login/${email}`)
      .then(result => result.json())
      .then(alert(`${email} has successfully logged in!`))
      .then(() => {
        this.props.history.push('/');
        this.props.toggleLogin();
        this.props.welcomeMessage(email);
      })
      .catch(() => {
        this.setState({
          email: '',
          password: '',
        })
        alert('Incorrect login information, try again...');
      })
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal,
    })
  }
  
  render() {
    const { modal, email, password } = this.state;
    const { handleChange, handleSubmit, toggleModal } = this;

    return (
      <Portal>
        {modal &&
          <Container>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <Close onClick={toggleModal}>X</Close>
            </Link>
            <h1 style={{color: '#82d8d8'}}>Login to Your Account...</h1><br/>
            <FlexForm onSubmit={handleSubmit}>
              <Input type='email' name='email' value={email} onChange={handleChange} placeholder='Enter email address...'/><br/>
              <Input type='password' name='password' value={password} onChange={handleChange} placeholder='Enter password...'/><br/>
              <Button>Login</Button>
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

export default withRouter(Login);

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
  margin: 0px 30%;
  padding-bottom: 40px;
  overflow: scroll;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Bree Serif', serif;
  min-width: 40%;
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
  font-size: 1.3em;
  border-radius: 5px;
  text-indent: 10px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.20), 0 8px 8px rgba(0,0,0,0.20);
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