import React, { Component } from 'react'
import Menu from './Menu.jsx';
import Generate from './Generate.jsx';
import WorkoutList from './WorkoutList.jsx';
import Library from './Library.jsx';
import SignUp from './SignUp.jsx';
import Login from './Login.jsx';
import styled from 'styled-components';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      welcome: '',
    }
    this.toggleLogin = this.toggleLogin.bind(this);
    this.welcomeMessage = this.welcomeMessage.bind(this);
  }

  toggleLogin() {
    this.setState({
      loggedIn: !this.state.loggedIn,
    });
  }

  welcomeMessage(email) {
    this.setState({
      welcome: `Welcome, ${email}!`
    });
  }

  render() {
    const { loggedIn, welcome } = this.state;
    const { toggleLogin, welcomeMessage } = this;

    return (
      <Router>
        <div id='main'>
          <Header>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <Title1>IronBorn</Title1>
            </Link>
            {
              !loggedIn && 
              <AuthWrapper>
                <Link to='/signup' style={{ textDecoration: 'none' }}>
                  <Auth>Sign Up</Auth>
                </Link>
                <Link to='/login' style={{ textDecoration: 'none' }}>
                  <Auth>Login</Auth>
                </Link>
              </AuthWrapper>
            }
            {
              loggedIn &&
              <AuthWrapper>
                <Auth>{welcome}</Auth>
                <Auth onClick={toggleLogin}>Logout</Auth>
              </AuthWrapper>
            }
          </Header>
          <Background>
            <Switch>
              <Route exact path='/' component={Menu} />
              <Route path='/create' component={Generate} />
              <Route path='/history' component={WorkoutList} />
              <Route path='/library' component={Library} />
              <Route path='/signup' component={SignUp} />
              <Route path='/login' render={() => <Login toggleLogin={toggleLogin} welcomeMessage={welcomeMessage} loggedIn={loggedIn} />} />
            </Switch>
            <Footer>
              <Copyright>Design by DanC.dev</Copyright>
            </Footer>
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
  font-size: 1.7em;
  box-shadow: 0 12px 24px rgba(0,0,0,0.22), 0 10px 10px rgba(0,0,0,0.20);
  z-index: 10;
`;

const Footer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #222;
  font-family: 'Bree Serif', serif;
  z-index: 10;
`;

const Title1 = styled.h1`
  cursor: pointer;
  color: #82d8d8;
  padding-bottom: 10px;
`;

const Copyright = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 15px;
  padding-bottom: 2px;
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

const AuthWrapper = styled.div`
  position: absolute;
  right: 30px;
  display: flex;
  height: 50%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Auth = styled.div`
  cursor: pointer;
  color: #82d8d8;
  font-size: 0.7em;
  margin: 0px 15px;
`;
