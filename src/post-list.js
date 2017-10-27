import React, { Component } from "react";
import { connect } from "react-redux";

class PostList extends Component {

  heading = () => "Posts"

  render() {
    const { posts } = this.props

    return (
      <div>
        <h1>{this.heading()}</h1>
        <ul>
          {
            posts.map(post => (
              <li>{post.id}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}


// Connect to Redux store
const mapStateToProps = ({posts}) => ({
  posts
})

export default connect(mapStateToProps)(PostList)
