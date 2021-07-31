import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Header } from 'components/header/header.component'
import HomePage from 'pages/home/home.page'
import CompanyPage from 'pages/company/company.page'
import FavoritesPage from 'pages/favorites/favorites.page'

const browserHistory = createBrowserHistory()

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/company/:symbol" component={CompanyPage} />
        <Route exact path="/favorites" component={FavoritesPage} />
      </Switch>
    </Router>
  )
}

export default Routes
