import React, {Component} from 'react'

import Navbar from '../navbar/navbar'

export default class Header extends Component{
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

