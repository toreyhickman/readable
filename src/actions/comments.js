import * as ReadableAPI from "../utils/readable-api";

export const ASSIGN_COMMENTS = "ASSIGN_COMMENTS";
export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const ADD_COMMENT = "ADD_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const assignComments = (comments) => ({
  type: ASSIGN_COMMENTS,
  comments
})

const updateComment = (commentData) => ({
  type: UPDATE_COMMENT,
  commentId: commentData.id,
  commentData
})

const addComment = (commentData) => ({
  type: ADD_COMMENT,
  commentData
})


const removeComment = (commentData) => ({
  type: REMOVE_COMMENT,
  commentId: commentData.id
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

export const createComment = (commentData) => dispatch => {
  ReadableAPI.createComment(commentData)
  .then((commentData) => dispatch(addComment(commentData)))
}

export const editComment = (commentData) => dispatch => {
  console.log("Edit comment action creator: " + commentData)
  ReadableAPI.editComment(commentData)
  .then((commentData) => dispatch(updateComment(commentData)))
}

export const deleteComment = (id) => dispatch => {
  ReadableAPI.deleteComment(id)
  .then((commentData) => dispatch(removeComment(commentData)))
}
