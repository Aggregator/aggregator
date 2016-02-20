import React from 'react'

import Navbar from './navbar'

export default class Header extends React.Component{
  render () {
    return (
      <header className="page-header">
        <div className="navbar-fixed">
          <Navbar/>
        </div>
      </header>
    )
  }
}

