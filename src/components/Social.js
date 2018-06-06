import React from "react";
import PropTypes from "prop-types";

class Social extends React.Component {
    render() {
        return (
            <a href={ this.props.href } title={ this.props.title }><i className={ this.props.icon }></i></a>
        );
    }
}

Social.propTypes = {
	icon: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Social;
