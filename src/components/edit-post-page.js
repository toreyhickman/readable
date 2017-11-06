import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editPost } from "../actions/posts";
import Header from "./header";
import EditPostForm from "./edit-post-form";

class EditPostPage extends Component {
  static PropTypes = {
    postId: PropTypes.string.isRequired
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Edit Post</h1>
        <EditPostForm postData={this.props.postData} onSubmit={this.props.editPost} />
      </div>
    )
  }
}


// Connect to Redux store
const mapStateToProps = ({posts}, ownProps) => ({
  postData: posts.find(post => post.id === ownProps.postId)
})

const mapDispatchToProps = (dispatch) => ({
  editPost: (postData) => dispatch(editPost(postData))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPostPage)
