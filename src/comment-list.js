import React, { Component } from "react";
import PropTypes from "prop-types";
import Comment from "./comment";

class CommentList extends Component {
  static PropTypes = {
    comments: PropTypes.array.isRequired
  }

  sortedComments = () => {
    return this.props.comments.sort((a, b) => {
      if (a.voteScore < b.voteScore) {
        return 1
      }

      if (a.voteScore > b.voteScore) {
        return -1
      }

      return 0
    })
  }
  render() {
    return (
      <ul>
        {
          this.sortedComments().map(comment => (
            <li><Comment {...comment}/></li>
          ))
        }
      </ul>
    )
  }
}

export default CommentList
