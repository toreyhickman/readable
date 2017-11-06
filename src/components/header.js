import React, { Component } from "react";
import { Link } from "react-router-dom";
import CategoryMenu from "./category-menu";
import NewPostLink from "./new-post-link";


class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/">home</Link>
        <CategoryMenu />
        <NewPostLink />
      </header>
    )
  }
}

export default Header
