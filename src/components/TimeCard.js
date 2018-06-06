import React from "react";
import PropTypes from "prop-types";

class TimeCard extends React.Component {
  render() {
    return (
      <li className={ this.props.position }>
        <div className={`timeline-badge ` + this.props.color}><i className={ this.props.badge }></i></div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4 className="timeline-title">{ this.props.title }</h4>
          </div>
          <div className="timeline-body">
            { this.props.content }
          </div>
        </div>
      </li>
    );
  }
}

TimeCard.defaultPros = {
  position: "",
  color: "",
};

TimeCard.propTypes = {
  inversed: PropTypes.string,
  color: PropTypes.string,
  badge: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default TimeCard;
