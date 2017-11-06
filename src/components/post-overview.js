import React, { Component } from "react";
import PropTypes from "prop-types";
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
    const { id, body, author, voteScore, commentCount } = this.props

    return (
      <div class="post-overview">
        <p>{body}</p>
        <p className="detail">Written by {author} on {this.postDate()}.</p>
        <p className="detail">Score: {voteScore}</p>
        <p className="detail">Comment count: {commentCount}</p>
        <PostVoter id={id} />
      </div>
    )
  }
}

export default PostOverview
