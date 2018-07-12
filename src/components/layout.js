import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Footer from './Footer'
import { StaticQuery, graphql } from 'gatsby'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            siteUrl
            keywords
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            {
              name: 'siteUrl',
              content: data.site.siteMetadata.siteUrl,
            },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
          script={[
            {
              defer: 'defer',
              src: 'https://use.fontawesome.com/releases/v5.0.13/js/all.js',
              integrity: 'sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe',
              crossorigin: 'anonymous',
            },
          ]}
          link={[{ rel: 'shortcut icon', href: '/favicon.ico' }]}
        />
        <div className="App">
          {children}
          <Footer/>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
