import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './session/greeting_container'
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/signup_form_container'
import SearchBarContainer from './search/search_bar_container';
import ProfileShowContainer from './profile/profile_show_container';
import BusinessMain from './business/business_main';
import BusinessShow from './business/business_show';
import mainImg from '../../../assets/images/main-pasta-1920.jpg'

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <figure className='main-img'>
            <img src={mainImg} alt="mainImg"/>
          </figure>
          <>
            <GreetingContainer />
          </>
          <h1>Bay Area Restaurants Corner</h1>
          <h2>Find a place for your meal</h2>
        </header>
        <Route path='/'>
          <Switch>
            <AuthRoute path='/login' component={LoginFormContainer} />
            <AuthRoute path='/signup' component={SignupFormContainer} />
            <Route path='/user/:userId' component={ProfileShowContainer} />
            <>
              <SearchBarContainer />
              <Route path='/' component={BusinessMain} />
              <Route exact path='/business/:businessId' component={BusinessShow} />
            </>
          </Switch>
        </Route>
        <footer>

        </footer>
      </>
    )
  }
}

export default App;