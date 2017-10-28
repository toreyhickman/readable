import * as ReadableAPI from "../utils/readable-api";

export const ASSIGN_POSTS = "ASSIGN_POSTS";
export const UPDATE_POST = "UPDATE_POST";

const assignPosts = (posts) => ({
  type: ASSIGN_POSTS,
  posts
})

const updatePost = (postData) => ({
  type: UPDATE_POST,
  postId: postData.id,
  postData
})

export const getPosts = () => dispatch => {
  ReadableAPI.getPosts()
  .then(posts => dispatch(assignPosts(posts)))
}

export const upVotePost = (id) => dispatch => {
  ReadableAPI.upVotePost(id)
  .then((postData) => dispatch(updatePost(postData)))
}

export const downVotePost = (id) => dispatch => {
  ReadableAPI.downVotePost(id)
  .then((postData) => dispatch(updatePost(postData)))
}
