import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import DDMenu from './ddMenu';
import HomePage from './homepage';
import PageDetails from './pagedetails';
import logo from './images/banner.svg';

import './App.css';


const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <div className="App-dd-container">
          <DDMenu />
        </div>
        <img src={logo} alt="logo" />
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Home" component={HomePage} />
        <Route exact path="/projects" component={PageDetails} />
        <Route exact path="/about" component={PageDetails} />
        <Route exact path="/contact" component={PageDetails} />
        <MainBody>
          <p>Under Construction</p>
        </MainBody>
      </Switch>
    </div>
  </Router>
);

export default App;

const MainBody = styled.div`

  p{
    color: black;
    display: flex;
    flex-direction: column;
    text-align: center;
    text-transform: uppercase;
  }

`;

