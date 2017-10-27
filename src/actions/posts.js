import * as ReadableAPI from "../utils/readable-api";

export const ASSIGN_POSTS = "ASSIGN_POSTS";

const assignPosts = (posts) => ({
  type: ASSIGN_POSTS,
  posts
})

export const getPosts = () => (
  (dispatch) => {
    ReadableAPI.getPosts()
    .then(posts => dispatch(assignPosts(posts)))
  }
)
