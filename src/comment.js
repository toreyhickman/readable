import React, { Component } from "react";
import { connect } from "react-redux";
import CommentVoter from "./comment-voter";
import { deleteComment } from "./actions/comments";

class Comment extends Component {
  commentDate = () => new Date(this.props.timestamp).toString()

  render() {
    const { id, body, author, voteScore } = this.props

    return (
      <div>
        <p>{body}</p>
        <p>Written by {author} on {this.commentDate()}.</p>
        <p>Score: {voteScore}</p>
        <CommentVoter id={id} />

        <button onClick={() => this.props.deleteComment(id)} >delete</button>
      </div>
    )
  }
}


// Connect to redux store
const mapDispatchToProps = (dispatch) => ({
  deleteComment: (id) => dispatch(deleteComment(id))
})

export default connect(null, mapDispatchToProps)(Comment)
