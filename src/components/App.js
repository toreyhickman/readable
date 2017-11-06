import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { connect } from "react-redux";
import LandingPage from "./landing-page";
import CategoryPage from "./category-page";
import NewPostPage from "./new-post-page";
import PostPage from "./post-page";
import EditPostPage from "./edit-post-page";
import { getCategories } from "../actions/categories";
import { getPosts } from "../actions/posts";


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
            <Route exact path="/categories/:category" render={(props) => <CategoryPage category={props.match.params.category} />} />
            <Route exact path="/posts/new" render={() => <NewPostPage />} />
            <Route exact path="/posts/:id" render={(props) => <PostPage postId={props.match.params.id} />} />
            <Route exact path="/posts/:id/edit" render={(props) => <EditPostPage postId={props.match.params.id} />} />
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
