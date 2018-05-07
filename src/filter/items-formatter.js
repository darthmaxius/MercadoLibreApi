import config from '../config'

const ItemsFormatter = (meliData) => {
  let newData = {
    author: config.author,
    categories: [],
    items: []
  }

  const categories = meliData.filters.find((item) => item.id === 'category')
  if (typeof categories !== 'undefined' && categories.values.length > 0) {
    categories.values[0].path_from_root.map((item) => {
      newData.categories.push(item.name)
    })
  }

  const items = meliData.results.slice(0, 4)
  items.map((item) => {
    const newItem = {
      id: item.id,
      title: item.title,
      price: item.price,
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping
    }

    newData.items.push(newItem)
  })

  return newData
}

export default ItemsFormatter
