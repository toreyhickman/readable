import React, { Component } from "react";
import CategoryMenu from "./category-menu";
import PostList from "./post-list";

class LandingPage extends Component {
  render() {
    return(
      <div>
        <CategoryMenu />
        <PostList />
      </div>
    )
  }
}

export default LandingPage
