import React, { Component } from "react";
import { Link } from "react-router-dom";
import CategoryMenu from "./category-menu";
import NewPostLink from "./new-post-link";


class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/">home</Link>
        <CategoryMenu />
        <NewPostLink />
      </div>
    )
  }
}

export default Header
