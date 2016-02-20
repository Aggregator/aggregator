import React from 'react'

export default class Projects extends React.Component{
  render () {
    return (
      <div className="section" id="projects">
        <ul className="collection with-header">
          <li className="collection-header">
            <h5>Projects</h5>
          </li>
          <li><a href="#" className="collection-item avatar active">
            <img src="http://lorempixel.com/30/30/technics/1" className="circle" alt="Wikido"/>Wikido</a></li>
          <li><a href="#" className="collection-item">Skalith</a></li>
          <li><a href="#" className="collection-item">Linkbuzz</a></li>
          <li><a href="#" className="collection-item">Zoonoodle</a></li>
          <li><a href="#" className="collection-item">Buzzster</a></li>
        </ul>
      </div>
    )
  }
}

