import React, { Component } from "react";
import { Link } from "react-router-dom";
import CategoryMenu from "./category-menu";


class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/">home</Link>
        <CategoryMenu />
      </div>
    )
  }
}

export default Header
