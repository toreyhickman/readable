
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class CategoryLink extends Component {
  static PropTypes = {
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  }

  render() {
    const { name, path } = this.props

    return (
      <Link to={`/categories/${path}`}>{name}</Link>
    )
  }
}

export default CategoryLink
