const READABLE_API_KEY  = "123456"
const READABLE_API_HOST = "http://localhost:3001"

const DEFAULT_REQUEST_OPTIONS = {
  headers: { "Authorization": READABLE_API_KEY }
}

const get = (path) => (
  fetch(READABLE_API_HOST + path, DEFAULT_REQUEST_OPTIONS)
  .then(response => response.json())
)

const post = (path, body) => (
  fetch(READABLE_API_HOST + path, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      ...DEFAULT_REQUEST_OPTIONS.headers,
      "Content-Type": "application/json"
    }
  })
  .then(response => response.json())
)

export const getCategories = () => get("/categories").then(json => json.categories)

export const getPosts = () => get("/posts")

export const upVotePost = (id) => post("/posts/" + id, {option: "upVote"})

export const downVotePost = (id) => post("/posts/" + id, {option: "downVote"})

export const createPost = (postData) => post("/posts", postData)
