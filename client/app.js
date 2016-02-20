import React from 'react'
import ReactDOM from 'react-dom'

import 'materialize-css/dist/css/materialize.css'

class App extends React.Component{
  render () {
    return (
      <div className="row">
        <div className="col s8">
          <div className="section">
            <div className="row">
              <div className="col s2">Back End</div>
              <div className="col s10">
                  <div className="col">
                     <div className="card-panel green">Dev</div>
                  </div>
                  <div className="col">
                     <div className="card-panel amber">Test</div>
                  </div>
                  <div className="col">
                     <div className="card-panel red">Demo</div>
                  </div>
                  <div className="col">
                     <div className="card-panel grey">Live</div>
                  </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="row">
              <div className="col s2">Front End</div>
              <div className="col s10">
                  <div className="col">
                     <div className="card-panel green">Dev</div>
                  </div>
                  <div className="col">
                     <div className="card-panel red">Test</div>
                  </div>
                  <div className="col">
                     <div className="card-panel red">Demo</div>
                  </div>
                  <div className="col">
                     <div className="card-panel red">Live</div>
                  </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="row">
              <div className="col s2">Android</div>
              <div className="col s10">
                  <div className="col">
                     <div className="card-panel green">Dev</div>
                  </div>
                  <div className="col">
                     <div className="card-panel amber">Test</div>
                  </div>
                  <div className="col">
                     <div className="card-panel grey">Demo</div>
                  </div>
                  <div className="col">
                     <div className="card-panel grey">Live</div>
                  </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="row">
              <div className="col s2">iOS</div>
              <div className="col s10">
                  <div className="col">
                     <div className="card-panel green">Dev</div>
                  </div>
                  <div className="col">
                     <div className="card-panel green">Test</div>
                  </div>
                  <div className="col">
                     <div className="card-panel amber">Demo</div>
                  </div>
                  <div className="col">
                     <div className="card-panel red">Live</div>
                  </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="row">
              <div className="col s2">Hybrid</div>
              <div className="col s10">
                  <div className="col">
                     <div className="card-panel green">Dev</div>
                  </div>
                  <div className="col">
                     <div className="card-panel green">Test</div>
                  </div>
                  <div className="col">
                     <div className="card-panel green">Demo</div>
                  </div>
                  <div className="col">
                     <div className="card-panel green">Live</div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col s4">
          <div className="section">
            <ul className="collection with-header">
              <li className="collection-header">
                <h5>Projects</h5>
              </li>
              <li><a href="#!" className="collection-item avatar active">
                <img src="http://lorempixel.com/30/30/technics" className="circle" alt="Wikido"/>Wikido</a></li>
              <li><a href="#!" className="collection-item">Skalith</a></li>
              <li><a href="#!" className="collection-item">Linkbuzz</a></li>
              <li><a href="#!" className="collection-item">Zoonoodle</a></li>
              <li><a href="#!" className="collection-item">Buzzster</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
