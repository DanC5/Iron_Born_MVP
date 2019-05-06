import React from 'react';
import styled from 'styled-components';

const style = {
  color: '#000',
  position: 'absolute',
  right: '20px',
}

document.addEventListener('click', (event) => {
  const clicked = event.target;
  if (!clicked.matches('#icon')) return;
  event.preventDefault();

  if (clicked.matches('.far')) {
    clicked.classList.remove('far');
    clicked.classList.add('fas');
    clicked.style.color = '#82d8d8';
  } else {
    clicked.classList.remove('fas');
    clicked.classList.add('far');
    clicked.style.color = '#000';
  }
}, false);

export default function Exercises({ exercises }) {
  return (    
    <Card>
      {exercises.map(exercise => {
        return (
          <div>
            <span><Link href={exercise.link} target='_blank'>{exercise.name}</Link></span>
            <i style={style} id='icon' className='far fa-star'></i>
          </div>
        )
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
  font-size: 1.2em;
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

const Link = styled.a`
  text-decoration: none;
  color: #000;
  transition: all 0.3s ease;
  margin-right: 20px;
  &:hover {
    font-size: 1.1em;
    border-bottom: 3px solid #82d8d8;
  }
`;
