import React, { Component } from "react";
import Header from "./components/Header";
import Social from "./components/Social";

import People from "./components/People";
import TimeCard from "./components/TimeCard";
import data from "./data";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron jumbotron-fluid vertical-center text-center bg-dark">
          <div className="container">
            <Header div="header" {...data.site} />

            <ul className="social-accounts list-inline row mt-5">
              {data.social.map((item, key) => (
                <li className="col d-flex justify-content-center" key={key}>
                  <Social {...item} />
                </li>
              ))}
            </ul>

            <div className="col d-flex justify-content-center position-absolute fixed-bottom">
              <Social
                icon="fas fa-arrow-circle-down"
                title="Follow the rabbit"
                href="#timeline"
              />
            </div>
          </div>
        </div>

        <div className="container pt-5">
          <div className="row">
            <h2 className="my-5 col-12" id="timeline">
              Timeline
            </h2>
            <ul className="timeline col-12" itemscope itemtype="http://schema.org/EventSeries">
              {data.timecard.map((item, key) => (
                <TimeCard {...item} key={key} />
              ))}
            </ul>

            <h2 className="my-5 col-12">Crew</h2>
            <div className="card-deck col-12 mt-5">
              {data.crew.map((item, key) => <People {...item} key={key} />)}
            </div>
          </div>
        </div>

        <footer className="footer bg-dark">
          <div className="container-fluid text-center">
            <p>
              Crafted with{" "}
              <span role="img" aria-label="love">
                ❤️
              </span>, <a href="https://reactjs.org/">react</a>,{" "}
              <a href="http://getbootstrap.com/">bootstrap</a> and{" "}
              <a href="https://fontawesome.com/">font-awesome</a> in{" "}
              <span role="img" aria-label="france">
                🇫🇷
              </span>.
            </p>
            <p>Hosted on  <a href="https://github.com/LePetitBloc/LePetitBloc">Github</a>.</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
