import React from 'react'

import Stages from './stages'
import Projects from './projects'

export default class Layout extends React.Component{
  render () {
    return (
      <div className="row">
        <div className="col s10">
          <Stages/>
        </div>
        <div className="col s2">
          <Projects/>
        </div>
      </div>
    )
  }
}

