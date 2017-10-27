import { ASSIGN_CATEGORIES } from "../actions/categories";

export function categories(state = [], action) {
  switch(action.type) {
    case ASSIGN_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
}
