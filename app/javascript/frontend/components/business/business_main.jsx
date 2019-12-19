import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import BusinessIndexContainer from './business_index_container';
import BusinessAllContainer from './business_all_container';

class BusinessMain extends React.Component {
  
  render() {
    return(
      <>
        <ul>
          <Link to={`/`}>Hot Restaurants</Link>
          <Link to={`/all`}>All Restaurants</Link>
        </ul>
        <Route path='/'>
          <Switch>
            <Route exact path='/' component={BusinessIndexContainer} />
            <Route exact path='/all' component={BusinessAllContainer} />
          </Switch>
        </Route>
      </>
    )
  };
}

export default BusinessMain;