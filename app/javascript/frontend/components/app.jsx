import React from 'react'
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './session/greeting_container'
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/signup_form_container'
class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Restaurants Corner</h1>
          <p>Find a place for your meal</p>
        </header>
        <nav>
          <GreetingContainer />
        </nav>
        <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} />
        <footer>

        </footer>
      </div>
    )
  }
}

export default App;