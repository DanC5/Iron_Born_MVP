import React, { Component } from 'react'
import styled from 'styled-components';
import WorkoutListItem from './WorkoutListItem.jsx';
import Portal from '../utilities/Portal.jsx';
import { Link } from 'react-router-dom';

export default class WorkoutList extends Component {
  constructor() {
    super();
    this.state = {
      workouts: [],
      modal: true,
    }
    this.getWorkouts = this.getWorkouts.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.deleteWorkout = this.deleteWorkout.bind(this);
  }
  
  componentDidMount() {
    this.getWorkouts();
  }

  getWorkouts() {
    fetch('/workouts')
      .then(results => results.json())
      .then(workouts => this.setState({
        workouts,
      }))
      .catch(() => console.log('Error fetching workouts...'))
  }

  deleteWorkout(id) {
    fetch(`/workouts/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application-json'
      },
      body: JSON.stringify(id)
    })
      .then(() => console.log('Workout deleted...'))
      .then(() => this.getWorkouts())
      .catch(console.log)
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal,
    })
  }

  render() {
    const { workouts, modal } = this.state;
    const { toggleModal, deleteWorkout } = this;

    return (
      <Portal>
        {modal &&
          <Container>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <Close onClick={toggleModal}>X</Close>
            </Link>
            <h1 style={{color: '#82d8d8'}}>Your Workout History</h1>
            {workouts.map(workout => {
              return <WorkoutListItem key={workout._id} workout={workout} deleteWorkout={deleteWorkout}/>
            })}
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
  padding-bottom: 20px;
  overflow: scroll;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: 'Bree Serif', serif;
  min-width: 60%;
  min-height: 60%;
  max-height: 78%;
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