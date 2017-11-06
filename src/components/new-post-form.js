import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import uuidv4 from "uuid/v4";

class NewPostForm extends Component {
  static PropTypes = {
    onSubmit: PropTypes.func.isRequired,
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

  isPostCreated = () => !!this.post()

  post = () => this.props.posts.find(post => post.id === this.state.postData.id)

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
        submitted: true,
        postData: {
          ...previousState.postData,
          id: uuidv4(),
          timestamp: Date.now()
        }
      }
    }
    , () => this.props.onSubmit(this.state.postData))
  }

  render() {
    const { id, title, body, author, category } = this.state.postData

    return (
      <div>
        {
          this.isPostCreated() ? <Redirect to={`/posts/${id}`} /> :
          <form onSubmit={this.handleFormSubmit} className="form">
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

            <button className="button">Create</button>
          </form>
        }
      </div>
    )
  }
}

// Connect to Redux store
const mapStateToProps = ({categories, posts}) => ({
  posts,
  categories
})

export default connect(mapStateToProps)(NewPostForm)
