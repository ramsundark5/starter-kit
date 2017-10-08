import React from 'react'
//import Routes from './Routes'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import { userIsAuthenticatedRedir, userIsNotAuthenticatedRedir, userIsAdminRedir,
  userIsAuthenticated, userIsNotAuthenticated } from '../security/Auth'
import Login from '../components/Login'
import Profile from '../components/Profile'
import Home from './Home'
import HeaderComponent from '../components/HeaderComponent'

const LoginComponent = userIsNotAuthenticatedRedir(Login)
const ProfileComponent = userIsAuthenticatedRedir(Profile)

const AppContainer = () => (
  <div>
      <HeaderComponent/>
      <main>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={LoginComponent} />
              <Route path="/profile" component={ProfileComponent} />
              <Redirect to="/" />
          </Switch>
      </main>
  </div>
)

export default AppContainer
