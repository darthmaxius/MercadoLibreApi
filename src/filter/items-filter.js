import axios from '../helpers/axios'
import fetch from 'node-fetch'

const ItemsFilter = (query) => {
  /*const url = 'https://api.mercadolibre.com/sites/MLA/search?q=' + query.trim()
  console.log(url)

  return fetch(url)*/

  return axios.get(`/sites/MLA/search?q=${query.trim()}`)
}

export default ItemsFilter
