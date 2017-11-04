import * as ReadableAPI from "../utils/readable-api";

export const ASSIGN_COMMENTS = "ASSIGN_COMMENTS";
export const UPDATE_COMMENT = "UPDATE_COMMENT";

const assignComments = (comments) => ({
  type: ASSIGN_COMMENTS,
  comments
})

const updateComment = (commentData) => ({
  type: UPDATE_COMMENT,
  commentId: commentData.id,
  commentData
})

export const getComments = (postId) => dispatch => {
  ReadableAPI.getComments(postId)
  .then(comments => {
    dispatch(assignComments(comments))
  })
}

export const upVoteComment = (id) => dispatch => {
  ReadableAPI.upVoteComment(id)
  .then((commentData) => dispatch(updateComment(commentData)))
}

export const downVoteComment = (id) => dispatch => {
  ReadableAPI.downVoteComment(id)
  .then((commentData) => dispatch(updateComment(commentData)))
}
