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

  postExists = () => !!this.props.post

  render() {
    return (
      <div>
      {
        !this.postExists() ? <Redirect to="/" /> :
        <div>
          <Header />
          <section className="post">
            <h1>{this.props.post.title}</h1>
            <Post {...this.props.post} />
          </section>
          <section>
            <h1>Comments</h1>
            <CommentList comments={this.props.comments} />
            <h2>Add a Comment</h2>
            <NewCommentForm postId={this.props.post.id}/>
          </section>
        </div>
      }
      </div>
    )
  }
}


// Connect to redux store
const mapStateToProps = ({posts, comments}, ownProps) => ({
  post: posts.find(post => post.id === ownProps.postId),
  comments: comments.filter(comment => comment.parentId === ownProps.postId)
})

const mapDispatchToProps = (dispatch) => ({
  getComments: (id) => dispatch(getComments(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)

