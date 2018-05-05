import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './scenes/home'
import About from './scenes/about'
import NotFound from './scenes/not-found'

const AppRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="*" component={NotFound} />
  </Switch>
)

export default AppRoutes
