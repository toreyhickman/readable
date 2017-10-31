import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editPost } from "./actions/posts";
import Header from "./header";
import PostForm from "./post-form";

class EditPostPage extends Component {
  static PropTypes = {
    postId: PropTypes.string.isRequired
  }

  render() {
    return (
      <div>
        <Header />
        <p>
          Refresh the page, if the form is not pre-populated.  There is a bug I cannot work out.
          I think it is an issue with using using react-router-dom and connect(), but I cannot figure it out.
        </p>
        <h1>Edit Post</h1>
        <PostForm onSubmit={this.props.editPost} postData={this.props.postData} />
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
