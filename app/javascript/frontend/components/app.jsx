import React from 'react'
import Cookies from 'universal-cookie';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Header from './header/header';
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/signup_form_container'
import ProfileShowContainer from './profile/profile_show_container';
import MainContent from './main_content/main_content';

class App extends React.Component {
  render() {
    const cookies = new Cookies();
    const darkMode = cookies.get('dark-mode') === "true";

    return (
      <div className={`app ${(darkMode) ? "dark-mode" : ""}`}>
        <Header />
        <Switch>
          <AuthRoute exact path='/login' component={LoginFormContainer} />
          <AuthRoute exact path='/signup' component={SignupFormContainer} />
          <Route path='/user/:userId' component={ProfileShowContainer} />
          <Route path='/' component={MainContent} />
        </Switch>
        <footer>
        </footer>
      </div>
    )
  }
}

export default App;