import React, { Component } from "react";
import Header from "./header";
import NewPostLink from "./new-post-link";
import PostList from "./post-list";

class LandingPage extends Component {
  render() {
    return(
      <div>
        <Header />
        <NewPostLink />
        <PostList />
      </div>
    )
  }
}

export default LandingPage
