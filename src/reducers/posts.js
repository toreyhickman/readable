import { ASSIGN_POSTS } from "../actions/posts";

export function posts(state = [], action) {
  switch(action.type) {
    case ASSIGN_POSTS:
      return action.posts
    default:
      return state
  }
}
