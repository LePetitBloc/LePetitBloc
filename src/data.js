import React from "react";
import { Fragment } from "react";

export default {
  site: {
    title: "Le Petit Bloc",
    baseline: "Build a decentralised, trustable and reliable world",
  },

  social: [
    {
      icon: "fab fa-twitter",
      title: "Link to our Twitter account",
      href: "https://twitter.com/lepetitbloc"
    },
    {
      icon: "fab fa-github",
      title: "Link to our Github account",
      href: "https://github.com/lepetitbloc"
    },
    {
      icon: "fab fa-docker",
      title: "Link to our Docker account",
      href: "https://hub.docker.com/u/lepetitbloc/"
    },
    {
      icon: "fab fa-discord",
      title: "Link to our Discord account",
      href: "https://discordapp.com/invite/PhdnNnf"
    },
    {
      icon: "fas fa-envelope-open",
      title: "Contact or Hire us",
      href: "mailto:bonjour@lepetitbloc.net?subject=Bonjour%20Le%20Petit%20Bloc"
    }
  ],

  timecard: [
    {
      badge: "fas fa-link",
      color: "warning",
      title: "New website",
      content:
        <Fragment>
          <small className="text-muted">
            <i className="fas fa-calendar-alt"></i> June 2018
          </small>

          <p>After six month with a simple html page with no stylesheet. We got a new website!</p>
        </Fragment>
    },
    {
      position : "timeline-centered",
      color: "primary",
      badge: "fas fa-exclamation",
      title: "Le Petit Bloc is now a french SCIC project!",
      content:
        <Fragment>
          <small className="text-muted">
            <i className="fas fa-calendar-alt"></i> Avril 2018
          </small>

          <p>
            After many discussions, we change our mind and get backs to our first ideas:
            <ol>
              <li>Le Petit Bloc is not only a "blockchain company". Decentralize is our keyword!</li>
              <li>We have our own ideas on Governance, Knowledge and Economy. We want to work on theses topics!</li>
              <li>We are disappointed by some actors. Projects need better supports. It's our role to help them and build a software craftsmanship organization.</li>
            </ol>
          </p>
        </Fragment>
    },
    {
      badge: "fab fa-github",
      title: "Default git template and truffle stack",
      content:
        <Fragment>
          <small className="text-muted">
            <i className="fas fa-calendar-alt"></i> Mars 2018
          </small>

          <p>Alexandre release some tools for our projects and our external audits on "Smart Contracts".</p>
        </Fragment>
    },
    {
      position : "timeline-inverted",
      badge: "fab fa-github",
      title: "First pull request on Bitcoin for Johan",
      content:
        <Fragment>
          <small className="text-muted">
            <i className="fas fa-calendar-alt"></i> Mars 2018
          </small>

          <p>Johan release his dynamic build tool for wallet and masternode and he made this
            first pull-request on Bitcoin.</p>
        </Fragment>
    },
    {
      position : "",
      badge: "fab fa-github",
      title: "Release of our old projects",
      content:
        <Fragment>
          <small className="text-muted">
            <i className="fas fa-calendar-alt"></i> February 2018
          </small>

          <p>Almost all of our personals projects are on Github!</p>
        </Fragment>
    },
    {
      position : "timeline-centered",
      color: "primary",
      badge: "fas fa-microphone",
      title: "First public talk",
      content:
        <Fragment>
          <small className="text-muted">
            <i className="fas fa-calendar-alt"></i> February 2018
          </small>

          <p>
            Our first public talk about "Le Petit Bloc". At this moment, we are just a startup studio for blockchain projects.
          </p>
        </Fragment>
    },
    {
      position : "timeline-inverted",
      color: "warning",
      badge: "fab fa-github",
      title: "Creation of our Github account",
      content:
        <Fragment>
          <small className="text-muted">
            <i className="fas fa-calendar-alt"></i> December 2017
          </small>

          <p>Hello <a href="https://github.com/LePetitBloc" target="_blank">Github</a>!</p>
        </Fragment>
    },
    {
      position : "timeline-centered",
      color: "primary",
      badge: "far fa-comment-dots",
      title: "Project development",
      content:
        <Fragment>
          <small className="text-muted">
            <i className="fas fa-calendar-alt"></i> September 2017
          </small>

          <p>
            After a year of experiments, Johan and Alexandre started to talk about a their projects about some
            "somethings" in blockchain. Codename: "dotchain".
          </p>
        </Fragment>
    },
  ],

  crew: [
    {
      style: {
        background: "url(https://pbs.twimg.com/profile_banners/907333229971111937/1522230076/1500x500) center/cover"
      },
      picture: "https://avatars3.githubusercontent.com/u/204451?s=460&v=4",
      name: 'Alexandre "pocky" BALMES',
      infos: [
        "Software consultant",
        "In love with DDD and quality",
        "Happy husband and father"
      ],
      social: [
        {icon: "fab fa-twitter", href:"https://twitter.com/cryptopocky"},
        {icon: "fab fa-github", href:"https://github.com/pocky"},
        {icon: "fab fa-linkedin", href:"https://www.linkedin.com/in/alexandrebalmes/"}
      ],
      email: "3F70 833B 886B A122"
    },
    {
      style: {
        background: "url(https://pbs.twimg.com/profile_banners/569418080/1398244280/1500x500) center/cover"
      },
      picture: "https://www.amabla.org/images/coworkers/lutangar.jpg",
      name: 'Johan "lutangar" DUFOUR',
      infos: [
        "Full-stack senior Web developer",
        "In love with dApps",
        "Happy gardener"
      ],
      social: [
        {icon: "fab fa-twitter", href:"https://twitter.com/lutangar"},
        {icon: "fab fa-github", href:"https://github.com/lutangar"},
        {icon: "fab fa-linkedin", href:"https://www.linkedin.com/in/johandufour/"}
      ],
      email: "johan@lepetitbloc.net"
    }
  ]
}
