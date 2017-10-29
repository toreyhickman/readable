import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./header";
import PostList from "./post-list";

class LandingPage extends Component {
  render() {
    const { posts } = this.props;

    return(
      <div>
        <Header />
        <PostList posts={posts}/>
      </div>
    )
  }
}


// Connect to Redux store
const mapStateToProps = ({posts}) => ({
  posts
})

export default connect(mapStateToProps)(LandingPage)
