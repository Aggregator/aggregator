const WAIT = 200

module.exports = {
  'Smoketest' (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', WAIT)
      .assert.containsText('.brand-logo', 'Aggregator')
      .end()
  }
}
