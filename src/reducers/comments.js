import { ASSIGN_COMMENTS, UPDATE_COMMENT, REMOVE_COMMENT } from "../actions/comments";

export function comments(state =[], action) {
  switch(action.type) {
    case ASSIGN_COMMENTS:
      return action.comments
    case UPDATE_COMMENT:
      return state.map(comment => comment.id === action.commentId ? action.commentData : comment)
    case REMOVE_COMMENT:
      return state.filter(comment => comment.id !== action.commentId)
    default:
      return state
  }
}
