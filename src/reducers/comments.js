import { ASSIGN_COMMENTS } from "../actions/comments";

export function comments(state =[], action) {
  switch(action.type) {
    case ASSIGN_COMMENTS:
      return action.comments
    default:
      return state
  }
}
