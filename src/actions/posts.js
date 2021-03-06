import * as ReadableAPI from "../utils/readable-api";

export const ASSIGN_POSTS = "ASSIGN_POSTS";
export const UPDATE_POST = "UPDATE_POST";
export const ADD_POST = "ADD_POST";
export const REMOVE_POST = "REMOVE_POST";

const assignPosts = (posts) => ({
  type: ASSIGN_POSTS,
  posts
})

const updatePost = (postData) => ({
  type: UPDATE_POST,
  postId: postData.id,
  postData
})

const addPost = (postData) => ({
  type: ADD_POST,
  postData
})

const removePost = (postData) => ({
  type: REMOVE_POST,
  postId: postData.id
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

export const createPost = (postData) => dispatch => {
  ReadableAPI.createPost(postData)
  .then((postData) => dispatch(addPost(postData)))
}

export const editPost = (postData) => dispatch => {
  ReadableAPI.editPost(postData)
  .then((postData) => dispatch(updatePost(postData)))
}

export const deletePost = (id) => dispatch => {
  ReadableAPI.deletePost(id)
  .then((postData) => dispatch(removePost(postData)))
}

export const refreshPost = (id) => dispatch => {
  ReadableAPI.getPost(id)
  .then((postData) => dispatch(updatePost(postData)))
}
