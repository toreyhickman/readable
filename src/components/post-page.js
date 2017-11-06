import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { deletePost } from "../actions/posts";
import { getComments } from "../actions/comments";
import Header from "./header";
import PostOverview from "./post-overview";
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
            <PostOverview {...this.props.post} />
            <Link to={`/posts/${this.props.post.id}/edit`} className="button small-button">edit</Link>
            <button onClick={() => this.props.deletePost(this.props.post.id)}  className="button small-button">delete</button>
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
  deletePost: (id) => dispatch(deletePost(id)),
  getComments: (id) => dispatch(getComments(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)

