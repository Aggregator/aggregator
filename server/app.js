import express from 'express'

const app = express()

app.set('port', process.env.PORT || 9000)

app.use('/', express.static('public'))

app.listen(app.get('port'), () => console.log(`server is up ${app.get('port')}`))
