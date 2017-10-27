import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategories } from "./actions/categories";
import CategoryLink from "./category-link";


class CategoryMenu extends Component {
  componentDidMount() {
    this.props.getCategories()
  }

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

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategories())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryMenu)
