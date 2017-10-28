import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
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

  heading = () => "Posts"

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

  render() {
    return (
      <div>
        <h1>{this.heading()}</h1>
        <span>Sort by: </span>
        <PostListSortOnPicker options={this.sortOptions} onChange={this.setSortOn} />
        <ul>
          {
            this.sortedPosts().map(post => (
              <li key={post.id}>
                <PostOverview {...post} />
              </li>
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
