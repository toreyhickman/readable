import { ASSIGN_COMMENTS, UPDATE_COMMENT } from "../actions/comments";

export function comments(state =[], action) {
  switch(action.type) {
    case ASSIGN_COMMENTS:
      return action.comments
    case UPDATE_COMMENT:
      return state.map(comment => comment.id === action.commentId ? action.commentData : comment)
    default:
      return state
  }
}
