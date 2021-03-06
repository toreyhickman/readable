import React, { Component } from "react";
import { connect } from "react-redux";
import CommentVoter from "./comment-voter";
import EditCommentForm from "./edit-comment-form";
import { deleteComment, editComment } from "../actions/comments";
import { refreshPost } from "../actions/posts";

class Comment extends Component {
  state = {
    editing: false
  }

  markEditing = (event) => this.setState({editing: true})

  commentDate = () => new Date(this.props.timestamp).toString()

  deleteComment = () => {
    this.props.deleteComment(this.props.id);
    this.props.refreshPost(this.props.parentId);
  }

  render() {
    const { id, body, author, voteScore, editComment } = this.props
    const { editing } = this.state

    return (
      <div className="comment">
        {
          editing ? <EditCommentForm editComment={editComment} commentData={{id, body}} /> :
          <div>
            <p>{body}</p>
            <p className="detail">Written by {author} on {this.commentDate()}.</p>
            <p className="detail">Score: {voteScore}</p>
            <CommentVoter id={id} />
            <span onClick={this.markEditing} className="button small-button">edit</span>
            <button onClick={this.deleteComment} className="button small-button">delete</button>
          </div>
        }
      </div>
    )
  }
}


// Connect to redux store
const mapDispatchToProps = (dispatch) => ({
  deleteComment: (id) => dispatch(deleteComment(id)),
  editComment: (commentData) => dispatch(editComment(commentData)),
  refreshPost: (postId) => dispatch(refreshPost(postId))
})

export default connect(null, mapDispatchToProps)(Comment)
