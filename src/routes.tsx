import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { useAuth } from './contexts/auth'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import PhotoShow from './pages/PhotoShow'

function AuthRoute () {
  return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
  )
}

function AppRoute () {
  return <BrowserRouter>
        <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/photo/:id" component={PhotoShow} />
            <Redirect to="/dashboard" />
        </Switch>
    </BrowserRouter>
}

function Routes () {
  const { signed } = useAuth()

  return signed ? AppRoute() : AuthRoute()
}

export default Routes
