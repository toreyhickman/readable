import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LandingPage from "./landing-page";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (<LandingPage />)} />
      </div>
    )
  }
}

export default App;
