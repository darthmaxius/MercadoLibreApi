import Items from './items'

const Routes = (app) => {
  app.use('/api', Items())
}

export default Routes
