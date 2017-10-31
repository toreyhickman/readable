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

export const getCategories = () => get("/categories").then(json => json.categories)

export const getPosts = () => get("/posts")

export const upVotePost = (id) => post("/posts/" + id, {option: "upVote"})

export const downVotePost = (id) => post("/posts/" + id, {option: "downVote"})

export const createPost = (postData) => post("/posts", postData)

export const editPost = (postData) => put("/posts/" + postData.id, postData)
