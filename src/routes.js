import {
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
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

  </Switch>
}

export default Routes