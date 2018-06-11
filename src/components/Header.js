import React from "react";
import PropTypes from "prop-types";

class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    baseline: PropTypes.string.isRequired
  };

  render() {
    return (
      <header>
        <h1 itemprop="name">{this.props.title}</h1>
        <em itemprop="description">{this.props.baseline}</em>
      </header>
    );
  }
}

export default Header;
