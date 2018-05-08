import axios from '../helpers/axios'

const ItemsFilter = (query) => axios.get(`/sites/MLA/search?q=${query.trim()}`)

export default ItemsFilter
