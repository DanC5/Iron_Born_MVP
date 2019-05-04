import React, { Component } from 'react'
import Menu from './Menu.jsx';
import Generate from './Generate.jsx';
import History from './History.jsx';
import Library from './Library.jsx';
import styled from 'styled-components';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div id='main'>
          <Header>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <Title1>Iron Born</Title1>
            </Link>
          </Header>
          <Background>
            <Switch>
              <Route exact path='/' component={Menu}/>
              <Route path='/create' component={Generate}/>
              <Route path='/history' component={History}/>
              <Route path='/library' component={Library}/>
            </Switch>
          </Background>
        </div>
      </Router>
    )
  }
}

const Header = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222;
  font-family: 'Bree Serif', serif;
  font-size: 1.5em;
  box-shadow: 0 12px 24px rgba(0,0,0,0.22), 0 10px 10px rgba(0,0,0,0.20);
  z-index: 10;
`;

const Title1 = styled.h1`
  cursor: pointer;
  color: #82d8d8;
`;

const Background = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
`;
