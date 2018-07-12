import React from 'react';
import PropTypes from 'prop-types';

class Social extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  };

  static defaultProps = {
    title: '',
  };

  render() {
    return (
      <a href={this.props.href} title={this.props.title}>
        <i className={this.props.icon} />
      </a>
    );
  }
}

export default Social;
