import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Portal from '../utilities/Portal.jsx';
import { workoutGenerator } from '../utilities/exercises.js';
import { Link as Redirect } from 'react-router-dom';

export default class WorkoutModal extends Component {
  constructor() {
    super();
    this.saveWorkout = this.saveWorkout.bind(this);
  }

  saveWorkout(workout) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(workout)
    }

    fetch('/workouts', options)
      .then(response => response.json())
      .then(() => console.log('Successfully posted to DB...'))
      .catch(() => console.log('Error posting to DB...'))
  }

  render() {
    const { duration, focus, toggleModal } = this.props;
    const { saveWorkout } = this;
    const workout = workoutGenerator(duration, focus);
    const cardio = workout[0];
    let counter = -1;

    return (
      <Portal>
        <Container>
          <Close onClick={toggleModal}>X</Close>
          <h1 style={{color: '#82d8d8'}}>Your Workout, Get Some!</h1>
          {duration === '30' && <h2>Cardio: <Link href={cardio.link} target='_blank'>{cardio.name} for 10 minutes</Link></h2>}
          {duration === '45' && <h2>Cardio: <Link href={cardio.link} target='_blank'>{cardio.name} for 15 minutes</Link></h2>}
          {duration === '60' && <h2>Cardio: <Link href={cardio.link} target='_blank'>{cardio.name} for 20 minutes</Link></h2>}
          {workout.map(exercise => {
            counter++
            return (exercise.name !== cardio.name &&
              <h2 key={counter}>Exercise {counter}: <Link href={exercise.link} target='_blank'>{exercise.name}</Link></h2>)
          })}
          <ButtonFlex>
            <Redirect to='/' style={{ textDecoration: 'none' }}>
              <Save onClick={() => saveWorkout(workout)}>Save to My Workouts</Save>
            </Redirect>
            <Refresh onClick={toggleModal}>Show Me a New One</Refresh>
          </ButtonFlex>
        </Container>
        <Background onClick={toggleModal} />
      </Portal>
    )
  }
}

WorkoutModal.propTypes = {
  duration: PropTypes.string.isRequired,
  focus: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

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
  background-color: #fff;
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
  font-size: 25px;
  padding: 5px 12px;
  margin: 5px;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  color: #ff6961;
  transition: all 0.3s ease;
  &:hover {
    background-color: #f4f4f4;
    border: 1px solid #ff6961;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: #000;
  transition: all 0.3s ease;
  &:hover {
    font-size: 1.3em;
    border-bottom: 4px solid #82d8d8;
  }
`;

const Save = styled.button`
  background-color: #222;
  font-family: 'Bree Serif', serif;
  color: #82d8d8;
  border-radius: 28px;
	border: 2px solid #222;
	cursor: pointer;
	font-size: 15px;
	padding: 10px 60px;
  margin: 30px 0px;
	text-decoration: none;
  box-shadow: 0 12px 24px rgba(0,0,0,0.22), 0 10px 10px rgba(0,0,0,0.20);
  transition: all 0.3s ease;
  &:hover {
    background-color: #111;
    font-size: 1.3em;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  }
`;

const Refresh = styled.button`
  background-color: #f4f4f4;
  font-family: 'Bree Serif', serif;
  color: #ff6961;
  border-radius: 28px;
	border: 2px solid #ff6961;
	cursor: pointer;
	font-size: 15px;
	padding: 10px 60px;
  margin: 30px 0px;
	text-decoration: none;
  box-shadow: 0 12px 24px rgba(0,0,0,0.22), 0 10px 10px rgba(0,0,0,0.20);
  transition: all 0.3s ease;
  &:hover {
    background-color: #fff;
    font-size: 1.3em;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  }
`;

const ButtonFlex = styled.div`
  display: flex;
  flex-direction: row;
  width: 75%;
  justify-content: space-evenly;
  align-items: center;
`;