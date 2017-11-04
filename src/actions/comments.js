import * as ReadableAPI from "../utils/readable-api";

export const ASSIGN_COMMENTS = "ASSIGN_COMMENTS";

const assign_comments = (comments) => ({
  type: ASSIGN_COMMENTS,
  comments
})

export const getComments = (postId) => dispatch => {
  ReadableAPI.getComments(postId)
  .then(comments => {
    dispatch(assign_comments(comments))
  })
}
