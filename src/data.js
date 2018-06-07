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
      position: "timeline-inverted",
      badge: "fas fa-link",
      color: "warning",
      title: "New website",
      content:
        <Fragment>
          <small className="text-muted">
            <i className="fas fa-calendar-alt"> </i> June 2018
          </small>

          <p>After six months with a simple Html page with no stylesheets, we finally have a new website!</p>
        </Fragment>
    },
    {
      badge: "fab fa-github",
      title: "Default git template and truffle stack",
      content:
        <Fragment>
          <small className="text-muted">
            <i className="fas fa-calendar-alt"> </i> May 2018
          </small>

          <p>Alexandre release some tools for our projects and our external audits on "Smart Contracts".</p>
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
            <i className="fas fa-calendar-alt"> </i> Avril 2018
          </small>

          <p>
            We refined our ideas and found our purpose:
          </p>

          <ol>
            <li>Le Petit Bloc is not only a "blockchain company". Decentralization is the word!</li>
            <li>We have our own ideas on Governance, Knowledge and Economy. We want to work on theses topics!</li>
            <li>Our role is to help and build a Software Craftsmanship organization.</li>
          </ol>
        </Fragment>
    },
    {
      position : "timeline-inverted",
      badge: "fas fa-briefcase",
      title: "First consulting mission",
      content:
        <Fragment>
          <small className="text-muted">
            <i className="fas fa-calendar-alt"> </i> Mars 2018
          </small>

          <p>
            Alexandre advise a french company to help them build the decentralization part of their project for
            a <abbr title="Banque Publique d'Investissement">BPI</abbr> challenge.
          </p>
        </Fragment>
    },
    {
      badge: "fab fa-github",
      title: "First pull request on Bitcoin for Johan",
      content:
        <Fragment>
          <small className="text-muted">
            <i className="fas fa-calendar-alt"> </i> Mars 2018
          </small>

          <p>Johan release his dynamic build tool for wallet and masternode and he made his
            first pull-request on Bitcoin.</p>
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
            <i className="fas fa-calendar-alt"> </i> February 2018
          </small>

          <p>
            First public talk about "Le Petit Bloc", a startup studio for blockchain projects.
          </p>
        </Fragment>
    },
    {
      position : "timeline-inverted",
      color: "warning",
      badge: "fab fa-github",
      title: "Hello Github!",
      content:
        <Fragment>
          <small className="text-muted">
            <i className="fas fa-calendar-alt"></i> December 2017
          </small>

          <p>Because we <span role="img" aria-label="love">❤️</span> Open Source.</p>
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
            <i className="fas fa-calendar-alt"> </i> September 2017
          </small>

          <p>
            Johan and Alexandre start talking about a common project around an agency
            in the blockchain economy. Codename: "dotchain".
          </p>
        </Fragment>
    },
    {
      position : "timeline-inverted",
      badge: "fas fa-briefcase",
      title: "Beyond The Void",
      content:
        <Fragment>
          <small className="text-muted">
            <i className="fas fa-calendar-alt"> </i> Janvier 2017
          </small>

          <p>
            Johan start working with <a href="https://beyond-the-void.net/">Beyond The Void</a>, the first french ICO on Ethereum.
          </p>
        </Fragment>
    },
    {
      badge: "fas fa-briefcase",
      title: "First dApp for Johan",
      content:
        <Fragment>
          <small className="text-muted">
            <i className="fas fa-calendar-alt"> </i> December 2016
          </small>

          <p>
            First Proof Of Concept with web3, React, Redux and redux-saga.<br />
            <a href="https://github.com/lutangar/ethereact">Ethereact</a>
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
