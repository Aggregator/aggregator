import 'whatwg-fetch'

export function GetProjects () {
  return new Promise(
    (resolve, reject) => {
      var url = 'http://localhost:3000/projects'
      var options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }

      window.fetch(url, options)
        .then(response => {
          if (!response.ok) {
            throw (new Error('Server error encountered'))
          }
          return response.text()
        })
        .then(responseText => {
          var payload = JSON.parse(responseText)
          resolve(payload)
        })
        .catch(error => {
          reject(error)
        })
    }
  )
}

