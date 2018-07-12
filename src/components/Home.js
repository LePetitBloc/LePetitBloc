import React from 'react'
import Social from './Social'
import People from './People'
import TimeCard from './TimeCard'
import content from '../content'
import Header from './Header'
import './Home.modules.css'

const Home = () => (
  <React.Fragment>
    <div className="jumbotron jumbotron-fluid vertical-center text-center bg-dark">
      <div className="container">
        <Header div="header" {...content.site} />
        <ul className="social-accounts list-inline row mt-5">
          {content.social.map((item, key) => (
            <li className="col d-flex justify-content-center" key={key}>
              <Social {...item} />
            </li>
          ))}
        </ul>

        <div className="col d-flex justify-content-center position-absolute fixed-bottom">
          <Social icon="fas fa-arrow-circle-down" title="Follow the rabbit" href="#timeline"/>
        </div>
      </div>
    </div>

    <div className="container pt-5">
      <div className="row">
        <h2 className="my-5 col-12" id="timeline">
          Timeline
        </h2>
        <ul className="timeline col-12" itemScope itemType="http://schema.org/EventSeries">
          {content.timecard.map((item, key) => <TimeCard {...item} key={key}/>)}
        </ul>

        <h2 className="my-5 col-12">Crew</h2>
        <div className="card-deck col-12 mt-5">{content.crew.map((item, key) => <People {...item} key={key}/>)}</div>
      </div>
    </div>
  </React.Fragment>
)

export default Home
