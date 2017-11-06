import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PostOverview from "./post-overview";
import PostListSortOnPicker from "./post-list-sort-on-picker";


class PostList extends Component {
  static PropTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      timestamp: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      voteScore: PropTypes.number.isRequired,
      deleted: PropTypes.bool.isRequired,
      commentCount: PropTypes.number.isRequired
    })).isRequired
  }

  state = {
    sortOn: "voteScore"
  }

  sortOptions = [
    { value: "voteScore", label: "Highest Score" },
    { value: "timestamp", label: "Most Recent" }
  ]

  setSortOn = (postAttribute) => this.setState({sortOn: postAttribute })

  sortedPosts = () => {
    const { sortOn } = this.state

    return this.props.posts.sort((a, b) => {
      if (a[sortOn] < b[sortOn]) {
        return 1
      }

      if (a[sortOn] > b[sortOn]) {
        return -1
      }

      return 0
    })
  }

  hasPosts = () => this.props.posts.length > 0

  render() {
    return (
      <div>
        <h1>Posts</h1>
        {
          !this.hasPosts() ? <p>No posts to show ...</p> :
          <div>
            <span>Sort by: </span>
            <PostListSortOnPicker options={this.sortOptions} onChange={this.setSortOn} />
            <ul>
              {
                this.sortedPosts().map(post => (
                  <li key={post.id} className="post-list-item">
                    <h1><Link to={`/posts/${post.id}`}>{post.title}</Link></h1>
                    <PostOverview {...post} />
                  </li>
                ))
              }
            </ul>
          </div>
        }
      </div>
    )
  }
}


export default PostList
