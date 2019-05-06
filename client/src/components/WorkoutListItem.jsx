import React, { Component } from 'react'
import styled from 'styled-components';

export default function WorkoutListItem({ workout, deleteWorkout }) {
  return (
    <Card>
      <Close onClick={() => deleteWorkout(workout._id)}>X</Close>
      <div style={{marginBottom: '5px'}}>Date: {workout.date}</div>
      {workout.workout.map(exercise => {
        return <div>{exercise.name}</div>
      })}
    </Card>
  )
}

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: left;
  background-color: #f4f4f4;
  border-radius: 5px;
  width: 60%;
  font-size: 1.1em;
  margin: 10px;
  padding: 10px 30px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.20), 0 10px 10px rgba(0,0,0,0.18);
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    font-size: 1.3em;
    cursor: pointer;
    background-color: #fff;
  }
`;

const Close = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 12px;
  padding: 5px 8px;
  margin: 5px;
  background-color: transparent;
  border-radius: 5px;
  border: none;
  color: #ff6961;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: #f4f4f4;
    border: 1px solid #ff6961;
  }
`;