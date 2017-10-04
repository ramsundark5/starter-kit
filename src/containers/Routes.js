import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { userIsAuthenticatedRedir, userIsNotAuthenticatedRedir, userIsAdminRedir,
  userIsAuthenticated, userIsNotAuthenticated } from '../security/Auth'
import Login from '../components/Login'
import Profile from '../components/Profile'
import Home from './Home'


const LoginComponent = userIsNotAuthenticatedRedir(Login)
const ProfileComponent = userIsAuthenticatedRedir(Profile)
//const Admin = userIsAuthenticatedRedir(userIsAdminRedir(AdminComponent))

const Routes = () => (
      <Router>
            <main>
                  <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/profile" component={ProfileComponent} />
                  </Switch>
            </main>
      </Router>
)


export default Routes