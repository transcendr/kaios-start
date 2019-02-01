// import * as React, {Component} from 'react'
import * as React from 'react';
import { Link } from 'gatsby';
const Header = ({ siteTitle }) => (React.createElement("div", { style: {
        background: '#333',
        marginBottom: '1.45rem',
        textAlign: 'center',
    } },
    React.createElement("div", { style: {
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem',
        } },
        React.createElement("h1", { style: { margin: 0 } },
            React.createElement(Link, { to: "/", style: {
                    color: 'white',
                    textDecoration: 'none',
                } }, siteTitle)))));
export default Header;
//# sourceMappingURL=header.js.map