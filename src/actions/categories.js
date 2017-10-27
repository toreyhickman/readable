import * as ReadableAPI from "../utils/readable-api";

export const ASSIGN_CATEGORIES = "ASSIGN_CATEGORIES";

const assignCategories = (categories) => ({
  type: ASSIGN_CATEGORIES,
  categories
})

export const getCategories = () => (
  (dispatch) => {
    ReadableAPI.getCategories()
    .then(categories => dispatch(assignCategories(categories)))
  }
)
