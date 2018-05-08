import config from '../config'

const DetailFormatter = (details, description, categoryData) => {
  let newData = {
    author: config.author,
    item: {
      id: details.id,
      title: details.title,
      price: {
        currency: details.currency_id,
        amount: details.price,
        decimals: 2
      },
      picture: details.pictures[0].url,
      condition: details.condition,
      free_shipping: details.shipping.free_shipping,
      sold_quantity: details.sold_quantity,
      description: description.plain_text,
      category: categoryData.path_from_root
    }
  }

  return newData
}

export default DetailFormatter
