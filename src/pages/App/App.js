import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
// import logo from './logo.svg';



import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  };
  render(){
    return(
      <Switch>
        <Route exact path='/' render={props =>
          <GamePage />
        }/>
      </Switch>
      
    )
  }
};

export default App;
