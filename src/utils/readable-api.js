const READABLE_API_KEY  = "123456"
const READABLE_API_HOST = "http://localhost:3001"

const DEFAULT_REQUEST_OPTIONS = {
  headers: { "Authorization": READABLE_API_KEY }
}

function get(path) {
  return fetch(READABLE_API_HOST + path, DEFAULT_REQUEST_OPTIONS)
  .then(response => response.json())
}

export async function getCategories() {
  return get("/categories").then(json => json.categories)
}
