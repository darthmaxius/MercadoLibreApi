import axios from '../helpers/axios'

export const detailFilter = (id) => axios.get(`/items/${id}`)
export const descriptionFilter = (id) => axios.get(`/items/${id}/description`)