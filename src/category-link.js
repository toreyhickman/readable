
import React, { Component } from "react";
import { Link } from "react-router-dom";

class CategoryLink extends Component {
  render() {
    const { name, path } = this.props

    return (
      <Link to={`/category/${path}`}>{name}</Link>
    )
  }
}

export default CategoryLink
