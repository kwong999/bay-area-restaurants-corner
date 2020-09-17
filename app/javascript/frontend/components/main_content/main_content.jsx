import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BusinessShow from '../business/business_show';
import MenuBar from '../menu_bar/menu_bar';
import MainIndex from './main_index';

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPathname: this.props.location.pathname
    };
  }

  componentDidUpdate(prevProps) {
    const newPath = this.props.location.pathname;
    const oldPath = prevProps.location.pathname;
    if (newPath !== oldPath) {
      this.setState({ currentPathname: newPath })
    }
  }

  render() {
    return (
      <>
        <MenuBar 
          currentPathname={this.state.currentPathname}
        />
        <Switch>
          <Route exact path="/" component={MainIndex} />
          <Route exact path="/all" component={MainIndex} />
          <Route exact path="/search" component={MainIndex} />
          <Route exact path="/business/:businessId" component={BusinessShow} />
        </Switch>
      </>
    )
  };
}

export default MainContent;