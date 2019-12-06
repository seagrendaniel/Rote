import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import GamePage from '../GamePage/GamePage';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <GamePage />} />
      </Switch>
    );
  }
}

export default App;
