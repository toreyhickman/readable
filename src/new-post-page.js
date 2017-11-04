import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./header";
import NewPostForm from "./new-post-form";
import { createPost } from "./actions/posts";


class NewPostPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Write a New Post</h1>
        <NewPostForm onSubmit={this.props.createPost} />
      </div>
    )
  }
}


// Connect to Redux store
const mapDispatchToProps = (dispatch) => ({
  createPost: (postData) => dispatch(createPost(postData))
})

export default connect(
  null,
  mapDispatchToProps
)(NewPostPage)
