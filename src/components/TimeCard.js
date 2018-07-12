import React from 'react';
import PropTypes from 'prop-types';

class TimeCard extends React.Component {
  static propTypes = {
    inversed: PropTypes.string,
    color: PropTypes.string,
    badge: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
  };

  static defaultProps = {
    position: '',
    color: '',
  };

  render() {
    return (
      <li className={this.props.position} itemProp="subEvent">
        <div className={`timeline-badge ` + this.props.color}>
          <i className={this.props.badge} />
        </div>
        <div className="timeline-panel" itemScope itemType="http://schema.org/Event">
          <div className="timeline-heading">
            <h3 className="timeline-title" itemProp="name">
              {this.props.title}
            </h3>
          </div>
          <div className="timeline-body">{this.props.content}</div>
        </div>
      </li>
    );
  }
}

export default TimeCard;
