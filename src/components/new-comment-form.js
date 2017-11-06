import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createComment } from "../actions/comments";
import uuidv4 from "uuid/v4";

class NewCommentForm extends Component {
  static PropTypes = {
    postId: PropTypes.string.isRequired
  }

  state = {
    commentData: {
      body: "",
      author: ""
    }
  }

  handleChange = (event) => this.updateCommentData(event.target.id, event.target.value)

  updateCommentData = (key, value) => {
    this.setState((previousState) => {
      return {
        commentData: {
          ...previousState.commentData,
          [key]: value
        }
      }
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    this.setState((previousState) => {
      return {
        commentData: {
          ...previousState.commentData,
          id: uuidv4(),
          timestamp: Date.now(),
          parentId: this.props.postId
        }
      }
    }
    , () => {
      this.props.createComment(this.state.commentData)
      this.reset()
    })
  }

  reset = () => this.setState({
    commentData: {
      body: "",
      author: ""
    }
  })

  render() {
    const { body, author } = this.state.commentData

    return (
      <form onSubmit={this.handleFormSubmit} className="form">
        <label htmlFor="body">Body: </label>
        <textarea id="body" onChange={this.handleChange} value={body} ></textarea>

        <label htmlFor="author">Author: </label>
        <input id="author" onChange={this.handleChange} value={author} />

        <button className="button">Add Comment</button>
      </form>
    )
  }
}


// Connect to redux store
const mapDispatchToProps = (dispatch) => ({
  createComment: (commentData) => dispatch(createComment(commentData)),
})

export default connect(null, mapDispatchToProps)(NewCommentForm)
