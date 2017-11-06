import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

class EditPostForm extends Component {
  static PropTypes = {
    postData: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      submitted: false,
      postData: props.postData
    }
  }

  handleChange = (event) => this.updatePostData(event.target.id, event.target.value)

  updatePostData = (key, value) => {
    this.setState((previousState) => {
      return {
        postData: {
          ...previousState.postData,
          [key]: value
        }
      }
    })
  }

  handleFormSubmit = (event) => {
    this.setState({ submitted: true}, () => this.props.onSubmit(this.state.postData))
  }

  render() {
    const { id, title, body } = this.state.postData

    return (
      <div>
        {
          this.state.submitted ? <Redirect to={`/posts/${id}`} /> :
          <form onSubmit={this.handleFormSubmit}>
            <label htmlFor="title">Title: </label>
            <input id="title" onChange={this.handleChange} value={title} />

            <label htmlFor="body">Body: </label>
            <textarea id="body" onChange={this.handleChange} value={body} ></textarea>

            <button>Edit</button>
          </form>
        }
      </div>
    )
  }
}

export default EditPostForm
