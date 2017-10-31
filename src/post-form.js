import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import uuidv4 from "uuid/v4";

class PostForm extends Component {
  static PropTypes = {
    onSubmit: PropTypes.func.isRequired,
    postData: PropTypes.shape({
      id: PropTypes.string,
      timestamp: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string,
      author: PropTypes.string
    })
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

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);

    if(nextProps.postData) {
      this.setState((previousState) => {
        return {
          postData: {
            ...previousState.postData,
            ...nextProps.postData
          }
        }
      })
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

    if (!this.isNewPost()) {
      this.props.onSubmit(this.state.postData)
    } else {
      this.setState((previousState) => {
        return {
          postData: {
            ...previousState.postData,
            id: uuidv4(),
            timestamp: Date.now()
          }
        }
      }
      , () => this.props.onSubmit(this.state.postData))
    }
  }

  isNewPost = () => !this.state.postData.id

  render() {
    const { title, body, author, category } = this.state.postData

    return (
      <form onSubmit={this.handleFormSubmit}>
        <label htmlFor="title">Title: </label>
        <input id="title" onChange={this.handleChange} value={title} />

        <label htmlFor="body">Body: </label>
        <textarea id="body" onChange={this.handleChange} value={body} ></textarea>

        {this.isNewPost() && <div>
          <label htmlFor="author">Author: </label>
          <input id="author" onChange={this.handleChange} value={author} />

          <label htmlFor="category">Category: </label>
          <select id="category" onChange={this.handleChange} value={category} >
            {this.props.categories.map(category => <option key={category.name} value={category.name} >{category.name}</option>)}
          </select>
        </div>}

        <button>{this.isNewPost() ? "Create" : "Edit"}</button>
      </form>
    )
  }
}

// Connect to Redux store
const mapStateToProps = ({categories}) => ({
  categories
})

export default connect(mapStateToProps)(PostForm)
