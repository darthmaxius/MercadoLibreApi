import cors from '../cors'
import items from '../filter/items-filter'
import express from 'express'

const Items = () => {
  const appRouter = express.Router()

  appRouter.get('/items', cors, (req, res) => {
    const meliApi = items(req.query.q)
      .then((reponse) => reponse.json())
      .then((jsonData) => {
        res.send(jsonData)
      })
      .catch((e) => {
        console.log(e)
      })
  })

  return appRouter
}

export default Items
