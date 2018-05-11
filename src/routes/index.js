import Items from './items'
import config from '../config'
import cors from '../cors'

const checkHeaders = (req, res, next) => {
  if (req.method !== 'OPTIONS') {
    if (!req.headers.authorization || config.secret !== req.headers.authorization) {
      return res.status(403).json({ error: 'No credentials sent!' })
    }
  }

  next()
}

const Routes = (app) => {
  app.use('/api', cors, checkHeaders, Items())
}

export default Routes
