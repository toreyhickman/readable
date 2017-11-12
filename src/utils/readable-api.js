const READABLE_API_KEY  = "123456"
const READABLE_API_HOST = "http://localhost:3001"

const DEFAULT_REQUEST_OPTIONS = {
  headers: {
    "Authorization": READABLE_API_KEY,
    "Content-Type": "application/json"
  }
}

const get = (path) => (
  fetch(READABLE_API_HOST + path, DEFAULT_REQUEST_OPTIONS)
  .then(response => response.json())
)

const post = (path, body) => (
  fetch(READABLE_API_HOST + path, {
    ...DEFAULT_REQUEST_OPTIONS,
    body: JSON.stringify(body),
    method: "POST"
  })
  .then(response => response.json())
)

const put = (path, body) => (
  fetch(READABLE_API_HOST + path, {
    ...DEFAULT_REQUEST_OPTIONS,
    body: JSON.stringify(body),
    method: "PUT"
  })
  .then(response => response.json())
)

const deleteRequest = (path) => (
  fetch(READABLE_API_HOST + path, {
    ...DEFAULT_REQUEST_OPTIONS,
    method: "DELETE"
  })
  .then(response => response.json())
)

export const getCategories = () => get("/categories").then(json => json.categories)

export const getPosts = () => get("/posts")

export const getPost = (id) => get("/posts/" + id)

export const upVotePost = (id) => post("/posts/" + id, {option: "upVote"})

export const downVotePost = (id) => post("/posts/" + id, {option: "downVote"})

export const createPost = (postData) => post("/posts", postData)

export const editPost = (postData) => put("/posts/" + postData.id, postData)

export const deletePost = (id) => deleteRequest("/posts/" + id)

export const getComments = (postId) => get("/posts/" + postId + "/comments")

export const upVoteComment = (id) => post("/comments/" + id, {option: "upVote"})

export const downVoteComment = (id) => post("/comments/" + id, {option: "downVote"})

export const deleteComment = (id) => deleteRequest("/comments/" + id)

export const createComment = (commentData) => post("/comments", commentData)

export const editComment = (commentData) => put("/comments/" + commentData.id, commentData)
