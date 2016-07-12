/* eslint-env mocha */

import React from 'react'
import { createRenderer } from 'react-addons-test-utils'
import { shallow } from 'enzyme'

import expect from 'expect'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX)

import Header from './header'
import Navbar from '../navbar/navbar'

describe('Component: Header', () => {
  let renderer, wrapper
  beforeEach(() => {
    renderer = createRenderer()
    renderer.render(<Header />)
    wrapper = shallow(<Header />)
  })
  it('shallow renders the header', () => {
    let actualElement = renderer.getRenderOutput()
    let expectedElement = (
      <header className='page-header'>
        <div className='navbar-fixed'>
          <Navbar />
        </div>
      </header>
    )
    expect(actualElement).toEqualJSX(expectedElement)
  })
  it('shallow renders a navbar inside the header', () => {
    let actualElement = renderer.getRenderOutput()
    let expectedElement = <Navbar />
    expect(actualElement).toIncludeJSX(expectedElement)
  })
  it('shallow renders the header with enzyme', () => {
    expect(wrapper.length).toEqual(1)
  })
  it('shallow renders a navbar inside the header with enzyme', () => {
    expect(wrapper.find('Navbar').length).toEqual(1)
  })
})
