import React, { Component } from "react";
import PropTypes from "prop-types";

class EditCommentForm extends Component {
  static PropTypes = {
    editComment: PropTypes.func.isRequired,
    commentData: PropTypes.shape({
      id: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      commentData: props.commentData
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
    this.props.editComment(this.state.commentData);
  }

  render() {
    const {body} = this.state.commentData

    return (
      <form onSubmit={this.handleFormSubmit}>
        <label htmlFor="body">Body: </label>
        <textarea id="body" onChange={this.handleChange} value={body}></textarea>

        <button>Edit</button>
      </form>
    )
  }
}

export default EditCommentForm
