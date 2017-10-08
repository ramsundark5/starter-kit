import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { userIsAuthenticatedRedir, userIsNotAuthenticatedRedir } from '../security/Auth'
import Login from '../components/Login'
import Profile from '../components/Profile'
import Home from './Home'
import HeaderComponent from '../components/HeaderComponent'

const AppContainer = () => (
  <div>
      <HeaderComponent/>
      <main>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={userIsNotAuthenticatedRedir(Login)} />
              <Route path="/profile" component={userIsAuthenticatedRedir(Profile)} />
              <Redirect to="/" />
          </Switch>
      </main>
  </div>
)

export default AppContainer
