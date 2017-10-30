import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import uuidv4 from "uuid/v4";

class PostForm extends Component {
  static PropTypes = {
    createPost: PropTypes.func.isRequired
  }

  state = {
    postData: {
      id: "",
      timestamp: "",
      title: "",
      body: "",
      author: "",
      category: "react"
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
    event.preventDefault()

    this.setState((previousState) => {
      return {
        postData: {
          ...previousState.postData,
          id: uuidv4(),
          timestamp: Date.now()
        }
      }
    }
    , () => this.props.createPost(this.state.postData))
  }

  render() {
    const { title, body, author, category } = this.state.postData

    return (
      <form onSubmit={this.handleFormSubmit}>
        <label htmlFor="title">Title: </label>
        <input id="title" onChange={this.handleChange} value={title} />

        <label htmlFor="body">Body: </label>
        <textarea id="body" onChange={this.handleChange} value={body} ></textarea>

        <label htmlFor="author">Author: </label>
        <input id="author" onChange={this.handleChange} value={author} />

        <label htmlFor="category">Category: </label>
        <select id="category" onChange={this.handleChange} value={category} >
          {this.props.categories.map(category => <option key={category.name} value={category.name} >{category.name}</option>)}
        </select>

        <button>Create</button>
      </form>
    )
  }
}

// Connect to Redux store
const mapStateToProps = ({categories}) => ({
  categories
})

export default connect(mapStateToProps)(PostForm)
