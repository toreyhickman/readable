import React, { Component } from "react";
import { connect } from "react-redux";
import CommentVoter from "./comment-voter";
import EditCommentForm from "./edit-comment-form";
import { deleteComment, editComment } from "../actions/comments";

class Comment extends Component {
  state = {
    editing: false
  }

  markEditing = (event) => this.setState({editing: true})

  commentDate = () => new Date(this.props.timestamp).toString()

  render() {
    const { id, body, author, voteScore, editComment } = this.props
    const { editing } = this.state

    return (
      <div>
        {
          editing ? <EditCommentForm editComment={editComment} commentData={{id, body}} /> :
          <div>
            <p>{body}</p>
            <p>Written by {author} on {this.commentDate()}.</p>
            <p>Score: {voteScore}</p>
            <CommentVoter id={id} />
            <span onClick={this.markEditing}>edit</span>
            <button onClick={() => this.props.deleteComment(id)} >delete</button>
          </div>
        }
      </div>
    )
  }
}


// Connect to redux store
const mapDispatchToProps = (dispatch) => ({
  deleteComment: (id) => dispatch(deleteComment(id)),
  editComment: (commentData) => dispatch(editComment(commentData))
})

export default connect(null, mapDispatchToProps)(Comment)
