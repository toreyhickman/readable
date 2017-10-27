import React, { Component } from "react";
import { connect } from "react-redux";
import CategoryLink from "./category-link";


class CategoryMenu extends Component {
  render() {
    const { categories } = this.props

    return(
      <ul>
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

export default connect(
  mapStateToProps
)(CategoryMenu)
