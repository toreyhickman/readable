import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { deletePost } from "./actions/posts";
import Header from "./header";
import PostOverview from "./post-overview";

class PostPage extends Component {
  postExists = () => !!this.props.post

  render() {
    return (
      <div>
      {
        !this.postExists() ? <Redirect to="/" /> :
          <div>
            <Header />
            <h1>{this.props.post.title}</h1>
            <PostOverview {...this.props.post} />
            <Link to={`/posts/${this.props.post.id}/edit`} >edit</Link>
            <button onClick={() => this.props.deletePost(this.props.post.id)} >delete</button>
          </div>
      }
      </div>
    )
  }
}


// Connect to redux store
const mapStateToProps = ({posts}, ownProps) => ({
  post: posts.find(post => post.id === ownProps.postId)
})

const mapDispatchToProps = (dispatch) => ({
  deletePost: (id) => dispatch(deletePost(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)

