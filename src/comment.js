import React, { Component } from "react";

class Comment extends Component {
  postDate = () => new Date(this.props.timestamp).toString()

  render() {
    const { body, author, voteScore } = this.props

    return (
      <div>
        <p>{body}</p>
        <p>Written by {author} on {this.postDate()}.</p>
        <p>Score: {voteScore}</p>
      </div>
    )
  }
}

export default Comment
