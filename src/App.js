import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import DDMenu from './ddMenu';
import HomePage from './homepage';
import Home from './pages/home';
import Projects from './pages/projects';
import Resume from './pages/resume';
import Contact from './pages/contact';

import './App.css';


const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <div className="menu-background">
          <DDMenu />
        </div>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact strict path="/Home" component={Home} />
        <Route exact strict path="/Projects" component={Projects} />
        <Route exact strict path="/Resume" component={Resume} />
        <Route exact strict path="/Contact" component={Contact} />
        <Route render={() => <h1>Page not found</h1>} />

      </Switch>
    </div>
  </Router>
);

export default App;
