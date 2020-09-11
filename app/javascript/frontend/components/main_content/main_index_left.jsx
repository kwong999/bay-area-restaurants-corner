import React from 'react';
import { withRouter } from 'react-router-dom'
import Loader from '../ui/loader';
import MainIndexTitle from './main_index_title';
import MainIndexList from './main_index_list';

class MainIndexLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPathname: this.props.location.pathname,
      currentPage: 1,
      limit: 5,
      random: (this.props.search) ? false : true
    }
  }

  componentDidMount() {
    // query businesses
    this.queryBusinesses();    
  }

  componentDidUpdate(prevProps) {
    const newPath = this.props.location.pathname;
    const oldPath = prevProps.location.pathname;
    if (newPath !== oldPath) {
      // update currentPathname then update Business for display
      this.setState({ currentPathname: this.props.location.pathname }, () => this.queryBusinesses());
    }
  }

  queryBusinesses() {
    // query businesses according to current path
    if (this.state.currentPathname === "/") {
      // Hot Restaurant feature
      // query 5 random businesses
      this.props.fetchBusinesses({ random: true });
    } else if (this.state.currentPathname === "/all") {
      // All Restaurent feature
      // query businesses according to currentPage and limit
      this.props.fetchBusinesses({ limit: this.state.limit, page: this.state.currentPage });
    }
  }

  render() {
    const loading = this.props.ui.loading.loadingBusiness;
    if (loading) {
      // display loading anime while loading
      return (
        <div className="business-left">
          <Loader />
        </div>
      )
    }
    return (
      // display businesses
      <div className="business-left">
        <MainIndexTitle currentPathname={this.state.currentPathname} />
        <MainIndexList businesses={this.props.businesses}/>
      </div>
    )
  }
}

export default withRouter(MainIndexLeft);