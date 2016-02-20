import React from 'react'
import ReactDOM from 'react-dom'

// import injectTapEventPlugin from 'react-tap-event-plugin'

// // Needed for onTouchTap
// // Can go away when react 1.0 release
// // Check this repo:
// // https://github.com/zilverline/react-tap-event-plugin
// injectTapEventPlugin();

import 'materialize-css/dist/css/materialize.css'

import Header from './components/header'
import Layout from './components/layout'

class App extends React.Component{
  render () {
    return (
      <section className="main" id="main">
        <Header/>
        <Layout/>
      </section>
    )
  }
}
const root = document.getElementById('root')
ReactDOM.render(<App/>, root)
