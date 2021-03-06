import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getComments } from "../actions/comments";
import Header from "./header";
import Post from "./post";
import CommentList from "./comment-list";
import NewCommentForm from "./new-comment-form";

class PostPage extends Component {
  componentDidMount() {
    this.props.getComments(this.props.postId)
  }

  postsLoaded = () => this.props.posts.length > 0

  badPostId = () => this.postsLoaded() && !this.props.post

  onPostDelete = () => {
    this.props.history.push("/")
  }

  render() {
    if (!this.postsLoaded()) {
      return null
    }

    return (
      <div>
        { this.badPostId() ? <Redirect to="/404" /> :
          <div>
            <Header />
            <section className="post">
              <h1>{this.props.post.title}</h1>
              <Post {...this.props.post} onPostDelete={this.onPostDelete} />
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
  posts,
  post: posts.find(post => post.id === ownProps.postId),
  comments: comments.filter(comment => comment.parentId === ownProps.postId)
})

const mapDispatchToProps = (dispatch) => ({
  getComments: (id) => dispatch(getComments(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)

