import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import LandingPage from "./landing-page";
import CategoryPage from "./category-page";
import NewPostPage from "./new-post-page";
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
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <LandingPage />} />
            <Route path="/categories/:category" render={(props) => <CategoryPage category={props.match.params.category} />} />
            <Route exact path="/posts/new" render={() => <NewPostPage />} />
          </Switch>
        </BrowserRouter>
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
