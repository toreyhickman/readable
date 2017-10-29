import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./header";
import NewPostLink from "./new-post-link";
import PostList from "./post-list";

class CategoryPage extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div>
        <Header />
        <NewPostLink />
        <PostList posts={posts}/>
      </div>
    )
  }
}


// Connect to Redux store
const mapStateToProps = ({posts}, ownProps) => ({
  posts: posts.filter(post => post.category === ownProps.category)
})

export default connect(mapStateToProps)(CategoryPage)
