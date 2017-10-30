import { ASSIGN_POSTS, UPDATE_POST, ADD_POST } from "../actions/posts";

export function posts(state = [], action) {
  switch(action.type) {
    case ASSIGN_POSTS:
      return action.posts
    case UPDATE_POST:
      return state.map(post => post.id === action.postId ? action.postData : post)
    case ADD_POST:
      return state.concat([action.postData])
    default:
      return state
  }
}
