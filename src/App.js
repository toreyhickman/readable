import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from "react-redux";
import LandingPage from "./landing-page";
import { getCategories } from "./actions/categories";
import { getPosts } from "./actions/posts";


class App extends Component {
  componentDidMount() {
    this.props.getCategories();
    this.props.getPosts();
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (<LandingPage />)} />
      </div>
    )
  }
}


// Connect to Redux store
const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategories()),
  getPosts: () => dispatch(getPosts())
})

export default connect(
  null,
  mapDispatchToProps
)(App)
