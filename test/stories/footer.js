import React from 'react'
import Footer from '../../client/components/common/footer/footer'

import { storiesOf } from '@kadira/storybook'

storiesOf('Footer', module)
  .add('with a text', () => (
    <Footer>footer</Footer>
  ))
  .add('with no text', () => (
    <Footer />
  ))
