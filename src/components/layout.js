import * as React from 'react';
import * as PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from './header';
// import './layout.css'
const Layout = ({ children, node = {} }) => (React.createElement(StaticQuery, { query: graphql `
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `, render: data => (React.createElement(React.Fragment, null,
        React.createElement(Helmet, { title: node.title || data.site.siteMetadata.title, meta: [
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
                {
                    name: 'google-site-verification',
                    content: 'gvgaIA35NAU5AEzzGiKVqZg3FBlVOdIBz_jKAS-BLh4',
                },
            ] },
            React.createElement("html", { lang: "en" })),
        React.createElement(Header, { siteTitle: node.title || data.site.siteMetadata.title }),
        React.createElement("div", { id: "layout", style: {
                margin: '0',
                padding: '0',
                height: '100vh',
                width: '100vh',
                cursor: 'none',
                background: 'yellow',
            } }, children))) }));
Layout.propTypes = {
    node: PropTypes.object,
    children: PropTypes.node.isRequired,
};
export default Layout;
//# sourceMappingURL=layout.js.map