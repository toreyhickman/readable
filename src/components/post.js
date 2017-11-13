import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PostVoter from "./post-voter";
import { deletePost } from "../actions/posts";

class Post extends Component {
  static PropTypes = {
    id: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
    deleted: PropTypes.bool.isRequired,
    commentCount: PropTypes.number.isRequired,
    onPostDelete: PropTypes.func
  }

  postDate = () => new Date(this.props.timestamp).toString()

  deletePost = () => {
    this.props.deletePost(this.props.id);
    this.props.onPostDelete && this.props.onPostDelete();
  }

  render() {
    const { id, body, author, voteScore, commentCount } = this.props

    return (
      <div className="post">
        <p>{body}</p>
        <p className="detail">Written by {author} on {this.postDate()}.</p>
        <p className="detail">Score: {voteScore}</p>
        <p className="detail">Comment count: {commentCount}</p>
        <PostVoter id={id} />
        <Link to={`/posts/${id}/edit`} className="button small-button">edit</Link>
        <button onClick={this.deletePost}  className="button small-button">delete</button>
      </div>
    )
  }
}


// Connect to redux store
const mapDispatchToProps = (dispatch) => ({
  deletePost: (id) => dispatch(deletePost(id))
})

export default connect(null, mapDispatchToProps)(Post)
