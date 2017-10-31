import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PostVoter from "./post-voter";

class PostOverview extends Component {
  static PropTypes = {
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
    deleted: PropTypes.bool.isRequired,
    commentCount: PropTypes.number.isRequired
  }

  postDate = () => new Date(this.props.timestamp).toString()

  render() {
    const { id, title, body, author, voteScore, commentCount } = this.props

    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
        <p>Written by {author} on {this.postDate()}.</p>
        <p>Score: {voteScore}</p>
        <p>Comment count: {commentCount}</p>
        <PostVoter id={id} />
        <Link to={`/posts/${id}/edit`} >edit</Link>
      </div>
    )
  }
}

export default PostOverview
