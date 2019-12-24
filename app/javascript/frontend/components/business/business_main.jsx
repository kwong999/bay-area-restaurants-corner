import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import BusinessIndexContainer from './business_index_container';
import BusinessAllContainer from './business_all_container';
import BusinessShow from './business_show';

class BusinessMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.location.pathname
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    const newPath = this.props.location.pathname;
    const oldPath = prevProps.location.pathname;
    if (newPath !== oldPath) {
      this.setState({ active: newPath })
    }
  }

  handleClick(type) {
    return e => {
      e.preventDefault();
      this.setState({active: type})
    }
  }
  render() {
    return(
      <>
        <nav className='business-main-nav-bar'>
          <ul>
            <li
              className={this.state.active === '/' ? 'active' : ''}
              onClick={this.handleClick('/')}
            ><Link to={`/`}>Hot Restaurants</Link></li>
            <li
              className={this.state.active === '/all' ? 'active' : ''}
              onClick={this.handleClick('/all')}
            ><Link to={`/all`}>All Restaurants</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/' component={BusinessIndexContainer} />
          <Route exact path='/all' component={BusinessAllContainer} />
          <Route exact path='/business/:businessId' component={BusinessShow} />
        </Switch>
      </>
    )
  };
}

export default BusinessMain;