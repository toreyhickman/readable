import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { upVotePost, downVotePost } from "../actions/posts";

class PostVoter extends Component {
  static PropTypes = {
    id: PropTypes.string.isRequired,
    upVotePost: PropTypes.func.isRequired,
    downVotePost: PropTypes.func.isRequired
  }

  handleUpVote = () => this.props.upVotePost(this.props.id);

  handleDownVote = () => this.props.downVotePost(this.props.id);

  render() {
    return (
      <div>
        <button onClick={this.handleUpVote} className="button small-button">up vote</button>
        <button onClick={this.handleDownVote} className="button small-button">down vote</button>
      </div>
    )
  }
}


// Connect to Redux store
const mapDispatchToProps = (dispatch) => ({
  upVotePost: (id) => dispatch(upVotePost(id)),
  downVotePost: (id) => dispatch(downVotePost(id))
})

export default connect(
  null,
  mapDispatchToProps
)(PostVoter)
