// import * as React, {Component} from 'react'
import * as React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }: { [key: string]: string }) => (
  <div
    style={{
      background: '#333',
      marginBottom: '1.45rem',
      textAlign: 'center',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
