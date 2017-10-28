import React, { Component } from "react";
import Header from "./header";
import PostList from "./post-list";

class LandingPage extends Component {
  render() {
    return(
      <div>
        <Header />
        <PostList />
      </div>
    )
  }
}

export default LandingPage
