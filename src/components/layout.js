import React from 'react'
import { Link } from 'gatsby'
import PropTypes from "prop-types"
import Symbols from './symbols'
import Header from './header'

import './core.css'

const Layout = ({ children }) => {
  return (
    <>
      <Symbols />
      <div style={{
        width: '100%',
        textAlign: 'center',
        padding: '0.5rem 1rem',
        background: '#717e80',
        boxSizing: 'border-box'
      }}>
        <Link to="/exhibits" style={{
          color: '#fff',
          textDecoration: 'none'
        }}>
          Current Exhibitions
        </Link>
      </div>
      <Header />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout