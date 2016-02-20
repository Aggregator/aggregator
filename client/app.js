import React, {Component} from 'react'
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
              <div className="col s2">Android</div>
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
                     <div className="card-panel grey lighten-1">Live</div>
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
                     <div className="card-panel amber">Test</div>
                  </div>
                  <div className="col">
                     <div className="card-panel red">Demo</div>
                  </div>
                  <div className="col">
                     <div className="card-panel grey lighten-1">Live</div>
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
          </div>
        </div>
        <div className="col s4">
          <div className="section">
            <ul className="collection with-header">
              <li className="collection-header">
                <h6>Projects</h6>
              </li>            
              <li><a href="#!" className="collection-item active">Wikido</a></li>
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
