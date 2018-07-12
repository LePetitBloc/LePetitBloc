import React from 'react'
import PropTypes from 'prop-types'
import Social from './Social'

class People extends React.Component {
  static propTypes = {
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    infos: PropTypes.array.isRequired,
    social: PropTypes.array.isRequired,
    email: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="card testimonial-card mt-5" itemScope itemType="https://schema.org/Person">
        <div className="card-up" style={this.props.style}>
          <div className="avatar">
            <img src={this.props.picture} alt={this.props.name} className="rounded-circle"/>
          </div>
        </div>

        <div className="card-body">
          <h4 className="card-title" itemProp="name">
            {this.props.name}
          </h4>
          <small itemProp="email">{this.props.email}</small>

          <hr />

          <p>{this.props.infos.map((item, key) => <li key={key}>{item}</li>)}</p>
        </div>

        <div className="card-footer">
          <ul className="social-accounts list-inline row">
            {this.props.social.map((item, key) => (
              <li className="col d-flex justify-content-center" key={key}>
                <Social {...item} className="col" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default People
