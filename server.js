import express from 'express'
import routes from './src/routes'
import compression from 'compression'

const app = express()
app.use(compression())

const env = process.env.NODE_ENV || 'development'
let port

switch (env) {
  case 'development':
    port = 3000
    break
  case 'prod':
    port = 3000
    break
  default:
    port = 3000
    break
}

routes(app)

app.listen(port, (err) => {
  if (err) {
    return console.log('Hubo un error', process.exit(1))
  }

  console.log(`Server escuchando en puerto ${port}. http://localhost:${port}`)
})
