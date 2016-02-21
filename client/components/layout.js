import React, {Component} from 'react'

import Lanes from './lanes'
import Projects from './projects'

export default class Layout extends Component{
  render () {
    return (
      <div className="row">
        <div className="col s10">
          <Lanes/>
        </div>
        <div className="col s2">
          <Projects/>
        </div>
      </div>
    )
  }
}

