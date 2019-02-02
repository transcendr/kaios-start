import * as React from 'react'
import * as PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
// import './layout.css'

const Layout = ({ children, node = {} }: any) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={node.title || data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
            {
              name: 'google-site-verification',
              content: 'gvgaIA35NAU5AEzzGiKVqZg3FBlVOdIBz_jKAS-BLh4',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={node.title || data.site.siteMetadata.title} />
        <div
          id="layout"
          style={{
            margin: '0',
            padding: '0',
            height: '100vh',
            width: '100vh',
            cursor: 'none',
            background: 'yellow',
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  node: PropTypes.object,
  children: PropTypes.node.isRequired,
}

export default Layout
