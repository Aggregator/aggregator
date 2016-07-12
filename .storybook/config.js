import { configure } from '@kadira/storybook'

function loadStories() {
  require('../test/stories/footer')
  // require as many as stories you need.
}

configure(loadStories, module)
