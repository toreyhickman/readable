import React, { Component } from "react";
import CommentVoter from "./comment-voter";

class Comment extends Component {
  postDate = () => new Date(this.props.timestamp).toString()

  render() {
    const { id, body, author, voteScore } = this.props

    return (
      <div>
        <p>{body}</p>
        <p>Written by {author} on {this.postDate()}.</p>
        <p>Score: {voteScore}</p>
        <CommentVoter id={id} />
      </div>
    )
  }
}

export default Comment
