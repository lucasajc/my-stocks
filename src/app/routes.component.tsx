import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import CompanyPage from 'pages/company/company.page'

const browserHistory = createBrowserHistory()

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/company/:symbol" component={CompanyPage} />
      </Switch>
    </Router>
  )
}

export default Routes
