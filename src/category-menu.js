import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { getCategories } from './utils/readable-api';

class CategoryMenu extends Component {
  state = {
    categories: []
  }

  componentDidMount() {
    getCategories()
    .then(categories => this.setState({categories}))
  }

  render() {
    const { categories } = this.state

    return(
      <ul>
        {categories.map(category => (
          <li key={category.name}>
            <Link to={`/category/${category.path}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    )
  }
}

export default CategoryMenu
