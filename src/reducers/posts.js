import { ASSIGN_POSTS, UPDATE_POST, ADD_POST, REMOVE_POST } from "../actions/posts";

export function posts(state = [], action) {
  switch(action.type) {
    case ASSIGN_POSTS:
      return action.posts
    case UPDATE_POST:
      return state.map(post => post.id === action.postId ? action.postData : post)
    case ADD_POST:
      return state.concat([action.postData])
    case REMOVE_POST:
      return state.filter(post => post.id !== action.postId)
    default:
      return state
  }
}
