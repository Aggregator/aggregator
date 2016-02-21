import React from 'react'

import Stages from './stages'
import Projects from './projects'

export default class Layout extends React.Component{
  render () {
    return (
      <div className="row">
        <div className="col s9">
          <Stages/>
        </div>
        <div className="col s3">
          <Projects/>
        </div>
      </div>
    )
  }
}

