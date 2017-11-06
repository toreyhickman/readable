import React, { Component } from "react";
import { Link } from "react-router-dom";

class NewPostLink extends Component {
  render() {
    return (
      <Link to="/posts/new" className="button">Write a Post</Link>
    )
  }
}

export default NewPostLink
