import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getPost } from "../utils/readable-api";
import { getComments } from "../actions/comments";
import Header from "./header";
import Post from "./post";
import CommentList from "./comment-list";
import NewCommentForm from "./new-comment-form";

class PostPage extends Component {
  state = {}

  componentDidMount() {
    getPost(this.props.postId)
    .then((post) => {
      this.setState({post}, () => {
        if (!this.badPostId()) {
          this.props.getComments(this.props.postId);
        }
      })
    })
  }

  postLoaded = () => this.state.post

  badPostId = () => this.state.post && this.state.post.error

  render() {
    if (!this.postLoaded()) {
      return null
    }

    return (
      <div>
        { this.badPostId() ? <Redirect to="/404" /> :
          <div>
            <Header />
            <section className="post">
              <h1>{this.state.post.title}</h1>
              <Post {...this.state.post} />
            </section>
            <section>
              <h1>Comments</h1>
              <CommentList comments={this.props.comments} />
              <h2>Add a Comment</h2>
              <NewCommentForm postId={this.props.postId}/>
            </section>
          </div>
        }
      </div>
    )
  }
}


// Connect to redux store
const mapStateToProps = ({posts, comments}, ownProps) => ({
  comments: comments.filter(comment => comment.parentId === ownProps.postId)
})

const mapDispatchToProps = (dispatch) => ({
  getComments: (id) => dispatch(getComments(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)

