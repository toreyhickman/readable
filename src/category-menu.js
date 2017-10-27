import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCategories } from "./actions/categories";

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
            <Link to={`/category/${category.path}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    )
  }
}

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
