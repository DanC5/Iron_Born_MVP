import React, { Component } from 'react'
import styled from 'styled-components';
import WorkoutModal from './WorkoutModal.jsx';

export default class Generate extends Component {
  constructor() {
    super();
    this.state = {
      duration: '30',
      focus: 'Upper-body push',
      modal: false,
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal,
    })
  }

  render() {
    const { duration, focus, modal } = this.state;
    const { toggleModal, handleChange } = this;

    return (
      <Container>
        <h1 style={{color: '#82d8d8'}}>Create a Workout...</h1>
        <h2>How much time do you have?</h2>
        <Select name='duration' id='duration' onChange={handleChange}>
          <option value='30'>30 minutes</option>
          <option value='45'>45 minutes</option>
          <option value='60'>1 hour</option>
        </Select>
        <h2>What do you want to focus on?</h2>
        <Select name='focus' id='focus' onChange={handleChange}>
          <option value='Upper-body push'>Upper-body push</option>
          <option value='Upper-body pull'>Upper-body pull</option>
          <option value='Core'>Core</option>
          <option value='Legs'>Legs</option>
        </Select><br/>
        <Button onClick={toggleModal}>Generate</Button>
        {modal && <WorkoutModal toggleModal={toggleModal} duration={duration} focus={focus} />}
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
  font-family: 'Bree Serif', serif;
  min-width: 50%;
  min-height: 60%;
  box-shadow: 0 12px 24px rgba(0,0,0,0.22), 0 10px 10px rgba(0,0,0,0.20);
  border-radius: 5px;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  }
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

const Select = styled.select`
  background-color: #f4f4f4;
  font-size: 18px;
  font-family: 'Bree Serif', serif;
`;