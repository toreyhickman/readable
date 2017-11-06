import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { upVoteComment, downVoteComment } from "../actions/comments";

class CommentVoter extends Component {
  static PropTypes = {
    id: PropTypes.string.isRequired,
    upVotePost: PropTypes.func.isRequired,
    downVotePost: PropTypes.func.isRequired
  }

  handleUpVote = () => this.props.upVoteComment(this.props.id);

  handleDownVote = () => this.props.downVoteComment(this.props.id);

  render() {
    return (
      <div class="comment-voter">
        <button onClick={this.handleUpVote} className="button small-button" >up vote</button>
        <button onClick={this.handleDownVote} className="button small-button" >down vote</button>
      </div>
    )
  }
}


// Connect to Redux store
const mapDispatchToProps = (dispatch) => ({
  upVoteComment: (id) => dispatch(upVoteComment(id)),
  downVoteComment: (id) => dispatch(downVoteComment(id))
})

export default connect(
  null,
  mapDispatchToProps
)(CommentVoter)
