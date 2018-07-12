import React, { Fragment } from 'react';

export default {
  site: {
    title: 'Le Petit Bloc',
    baseline: 'Build a decentralised, trustable and reliable world',
  },

  social: [
    {
      icon: 'fab fa-twitter',
      title: 'LePetitBloc on Twitter',
      href: 'https://twitter.com/lepetitbloc',
    },
    {
      icon: 'fab fa-github',
      title: 'LePetitBloc on Github',
      href: 'https://github.com/lepetitbloc',
    },
    {
      icon: 'fab fa-docker',
      title: 'LePetitBloc on DockerHub',
      href: 'https://hub.docker.com/u/lepetitbloc/',
    },
    {
      icon: 'fab fa-discord',
      title: 'Join LePetitbloc on Discord',
      href: 'https://discordapp.com/invite/PhdnNnf',
    },
    {
      icon: 'fas fa-envelope-open',
      title: 'Contact or Hire us',
      href: 'mailto:bonjour@lepetitbloc.net?subject=Bonjour%20Le%20Petit%20Bloc',
    },
  ],

  timecard: [
    {
      position: 'timeline-inverted',
      badge: 'fas fa-link',
      color: 'warning',
      title: 'New website',
      content: (
        <React.Fragment>
          <small className="text-muted" itemProp="startDate">
            <i className="fas fa-calendar-alt"> </i> June 2018
          </small>

          <div itemProp="description">
            <p>After six months with a simple Html page with no stylesheets, we finally have a new website!</p>
          </div>
        </React.Fragment>
      ),
    },
    {
      badge: 'fab fa-github',
      title: 'Default git template and truffle stack',
      content: (
        <Fragment>
          <small className="text-muted" itemProp="startDate">
            <i className="fas fa-calendar-alt"> </i> May 2018
          </small>

          <div itemProp="description">
            <p>Alexandre release tools for projects and external audits on "Smart Contracts".</p>
          </div>
        </Fragment>
      ),
    },
    {
      position: 'timeline-centered',
      color: 'primary',
      badge: 'fas fa-exclamation',
      title: 'Le Petit Bloc is now a french SCIC project!',
      content: (
        <Fragment>
          <small className="text-muted" itemProp="startDate">
            <i className="fas fa-calendar-alt"> </i> Avril 2018
          </small>

          <div itemProp="description">
            <p>Le Petit Bloc found its purpose:</p>

            <ol>
              <li>
                Le Petit Bloc is not another <em>blockchain company</em>.
              </li>
              <li>
                <strong>Decentralization</strong> is the key!
              </li>
              <li>Governance, Knowledge and Economy are the topics and we have convictions.</li>
              <li>Here to help and build a Software Craftsmanship organization.</li>
            </ol>
          </div>
        </Fragment>
      ),
    },
    {
      position: 'timeline-inverted',
      badge: 'fas fa-briefcase',
      title: 'First consulting mission',
      content: (
        <Fragment>
          <small className="text-muted" itemProp="startDate">
            <i className="fas fa-calendar-alt"> </i> Mars 2018
          </small>

          <div itemProp="description">
            <p>
              Alexandre work as an advisor for a french company and help them build the decentralization part of their
              project for a <abbr title="Banque Publique d'Investissement">BPI</abbr> challenge.
            </p>
          </div>
        </Fragment>
      ),
    },
    {
      badge: 'fab fa-github',
      title: 'First pull request on Bitcoin',
      content: (
        <Fragment>
          <small className="text-muted" itemProp="startDate">
            <i className="fas fa-calendar-alt"> </i> Mars 2018
          </small>

          <div itemProp="description">
            <p>
              Johan release his dynamic build tool for wallet and masternode and he made his first pull-request on
              Bitcoin.
            </p>
          </div>
        </Fragment>
      ),
    },
    {
      position: 'timeline-centered',
      color: 'primary',
      badge: 'fas fa-microphone',
      title: 'First public talk',
      content: (
        <Fragment>
          <small className="text-muted" itemProp="startDate">
            <i className="fas fa-calendar-alt"> </i> February 2018
          </small>

          <div itemProp="description">
            <p>First public talk about "Le Petit Bloc", a startup studio for blockchain projects.</p>
          </div>
        </Fragment>
      ),
    },
    {
      position: 'timeline-inverted',
      color: 'warning',
      badge: 'fab fa-github',
      title: 'Hello Github!',
      content: (
        <Fragment>
          <small className="text-muted" itemProp="startDate">
            <i className="fas fa-calendar-alt" /> December 2017
          </small>

          <div itemProp="description">
            <p>
              Because we{' '}
              <span role="img" aria-label="love">
                ❤️
              </span>{' '}
              Open Source.
            </p>
          </div>
        </Fragment>
      ),
    },
    {
      position: 'timeline-centered',
      color: 'primary',
      badge: 'far fa-comment-dots',
      title: 'Project development',
      content: (
        <Fragment>
          <small className="text-muted" itemProp="startDate">
            <i className="fas fa-calendar-alt"> </i> September 2017
          </small>

          <div itemProp="description">
            <p>
              Johan and Alexandre start talking about a common project around an agency in the blockchain economy.
              Codename: "dotchain".
            </p>
          </div>
        </Fragment>
      ),
    },
    {
      position: 'timeline-inverted',
      badge: 'fas fa-briefcase',
      title: 'Beyond The Void',
      content: (
        <Fragment>
          <small className="text-muted" itemProp="startDate">
            <i className="fas fa-calendar-alt"> </i> Janvier 2017
          </small>

          <div itemProp="description">
            <p>
              Johan start working with <a href="https://beyond-the-void.net/">Beyond The Void</a>, the first french ICO
              on Ethereum.
            </p>
          </div>
        </Fragment>
      ),
    },
    {
      badge: 'fas fa-briefcase',
      title: 'First dApp for Johan',
      content: (
        <Fragment>
          <small className="text-muted" itemProp="startDate">
            <i className="fas fa-calendar-alt"> </i> December 2016
          </small>

          <div itemProp="description">
            <p>
              First Proof Of Concept with web3, React, Redux and redux-saga.<br />
              <a href="https://github.com/lutangar/ethereact">Ethereact</a>
            </p>
          </div>
        </Fragment>
      ),
    },
  ],

  crew: [
    {
      style: {
        background: 'url(https://pbs.twimg.com/profile_banners/907333229971111937/1522230076/1500x500) center/cover',
      },
      picture: 'https://avatars3.githubusercontent.com/u/204451?s=460&v=4',
      name: 'Alexandre "pocky" BALMES',
      infos: ['Software consultant', 'In love with DDD and quality', 'Happy husband and father'],
      social: [
        { icon: 'fab fa-twitter', href: 'https://twitter.com/cryptopocky' },
        { icon: 'fab fa-github', href: 'https://github.com/pocky' },
        {
          icon: 'fab fa-linkedin',
          href: 'https://www.linkedin.com/in/alexandrebalmes/',
        },
      ],
      email: '3F70 833B 886B A122',
    },
    {
      style: {
        background: 'url(https://pbs.twimg.com/profile_banners/569418080/1398244280/1500x500) center/cover',
      },
      picture: 'https://www.amabla.org/images/coworkers/lutangar.jpg',
      name: 'Johan "lutangar" DUFOUR',
      infos: ['Full-stack senior Web developer', 'In love with dApps', 'Happy gardener'],
      social: [
        { icon: 'fab fa-twitter', href: 'https://twitter.com/lutangar' },
        { icon: 'fab fa-github', href: 'https://github.com/lutangar' },
        {
          icon: 'fab fa-linkedin',
          href: 'https://www.linkedin.com/in/johandufour/',
        },
      ],
      email: 'johan@lepetitbloc.net',
    },
  ],
};
