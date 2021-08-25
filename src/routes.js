import {
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Profile from './pages/profile'
import Signup from './pages/signup'

function Routes() {
  return <Switch>
    <Route exact path='/'>
      <Home />
    </Route>
    <Route path="/signup">
      <Signup />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/profile">
      <Profile />
    </Route>

  </Switch>
}

export default Routes