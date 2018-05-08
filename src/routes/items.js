import cors from '../cors'
import items from '../filter/items-filter'
import { detailFilter as detail, descriptionFilter as description } from '../filter/detail-filter'
import express from 'express'
import formaterItem from '../filter/items-formatter'
import formaterDetail from '../filter/detail-formatter'
import axios from 'axios';

const Items = () => {
  const appRouter = express.Router()

  appRouter.get('/items', cors, (req, res) => {
    const meliApi = items(req.query.q)
      .then((jsonData) => {
        res.send(formaterItem(jsonData.data))
      })
      .catch((e) => {
        console.log(e)
      })
  })

  appRouter.get('/items/:id', cors, (req, res) => {
    let request = [
      detail(req.params.id),
      description(req.params.id)
    ]

    let resultsRequest = axios.all(request)
      .then((results) => {
        res.send(formaterDetail(results[0].data, results[1].data))
      })
      .catch((e) => {
        console.log(e)
      })
  })

  return appRouter
}

export default Items
