import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CategoryLink from "./category-link";


class CategoryMenu extends Component {
  static PropTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string
    })).isRequired
  }

  render() {
    const { categories } = this.props

    return(
      <ul class="category-list">
        {categories.map(category => (
          <li key={category.name}>
            <CategoryLink {...category} />
          </li>
        ))}
      </ul>
    )
  }
}


// Connect to Redux store
const mapStateToProps = ({categories}) => ({
  categories
})

export default connect(mapStateToProps)(CategoryMenu)
