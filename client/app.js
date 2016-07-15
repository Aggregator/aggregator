import 'babel-polyfill'

import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import injectTapEventPlugin from 'react-tap-event-plugin'

// // Needed for onTouchTap
// // Can go away when react 1.0 release
// // Check this repo:
// // https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()

import 'materialize-css/dist/css/materialize.css'

import Header from './components/common/header/header'
import Layout from './components/layouts/layout'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <section id='main' className='main'>
          <Header />
          <Layout />
        </section>
      </MuiThemeProvider>
    )
  }
}
const root = document.getElementById('root')
ReactDOM.render(<App />, root)
