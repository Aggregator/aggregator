import React, { Component } from 'react'

import { GetProjects } from '../../services/api'

export default class Projects extends Component {
  constructor (props) {
    super(props)
    this.state = {
      projects: []
    }
    this.refreshProjects = this.refreshProjects.bind(this)
  }
  componentDidMount () {
    this.refreshProjects()
  }

  refreshProjects () {
    var self = this
    GetProjects().then(payload => {
      self.setState({
        projects: payload
      })
    })
    .catch(error => {
      console.log(error)
    })
  }
  render () {
    const projects = this.state.projects
    const projectsList = projects.map(project => {
      return (
        <li key={project.id}>
          <a href='#' className='collection-item'>{project.displayName}</a>
        </li>
      )
    })
    return (
      <section className='section-projects' id='projects'>
        <ul className='collection with-header'>
          <li className='collection-header'>
            <h5>Projects</h5>
          </li>
          <li><a href='#' className='collection-item avatar active'>
            <img src='http://lorempixel.com/30/30/technics/1' className='circle' alt='Wikido' />Wikido</a>
          </li>
          { projectsList }
        </ul>
      </section>
    )
  }
}
