import express from 'express'

const app = express()

import pipelines from './routes/pipelines'
import projects from './routes/projects'

app.set('port', process.env.PORT || 3000)

app.use('/', express.static('public'))

app.use('/pipelines', pipelines)
app.use('/projects', projects)

app.listen(app.get('port'), () => console.log(`server is up ${app.get('port')}`))
