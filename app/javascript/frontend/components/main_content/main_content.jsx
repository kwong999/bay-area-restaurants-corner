import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BusinessIndexContainer from '../business/business_index_container';
import BusinessAllContainer from '../business/business_all_container';
import BusinessShow from '../business/business_show';
import MenuBar from '../menu_bar/menu_bar';

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPathname: this.props.location.pathname
    };
    this.updateMainContentState = this.updateMainContentState.bind(this);
  }

  componentDidUpdate(prevProps) {
    const newPath = this.props.location.pathname;
    const oldPath = prevProps.location.pathname;
    if (newPath !== oldPath) {
      this.setState({ currentPathname: newPath })
    }
  }

  updateMainContentState(stateName, value) {
    return e => {
      e.preventDefault();
      this.setState({ stateName: value })
    }
  }
  render() {
    return (
      <>
        <MenuBar 
          currentPathname={this.state.currentPathname}
          updateMainContentState={this.updateMainContentState}
        />
        <Switch>
          <Route exact path="/" component={BusinessIndexContainer} />
          <Route exact path="/all" component={BusinessAllContainer} />
          <Route exact path="/business/:businessId" component={BusinessShow} />
        </Switch>
      </>
    )
  };
}

export default MainContent;