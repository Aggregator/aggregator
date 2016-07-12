/* eslint-env mocha */

import React from 'react'
import {
  createRenderer,
  renderIntoDocument
} from 'react-addons-test-utils'

import expect from 'expect'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX)

import Footer from './footer'

describe('Component: Footer', () => {
  it('fully loaded DOM rendering of footer', () => {
    let actualElement = renderIntoDocument(
      <Footer />
    )
    expect(actualElement).toExist()
  })

  it('shallow renders a footer', () => {
    let renderer = createRenderer()
    renderer.render(<Footer />)
    let actualElement = renderer.getRenderOutput()
    let expectedElement = <footer></footer>
    expect(actualElement).toEqualJSX(expectedElement)
  })
})
