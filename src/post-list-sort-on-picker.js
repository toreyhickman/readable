import React, { Component } from "react";
import PropTypes from "prop-types";

class PostListSortOnPicker extends Component {
  static PropTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })).isRequired,
    onChange: PropTypes.func.isRequired
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.props.onChange(value);
  }

  render() {
    const { options } = this.props

    return (
      <select onChange={this.handleChange} >
        {
          options.map((option, index) => <option key={index} value={option.value}>{option.label}</option>)
        }
      </select>
    )
  }
}

export default PostListSortOnPicker
