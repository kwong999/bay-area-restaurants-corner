import React from 'react';
import { withRouter } from 'react-router-dom'
import Loader from '../ui/loader';
import MainIndexTitle from './main_index_title';
import MainIndexList from './main_index_list';
import PageLine from '../ui/page_line';

class MainIndexLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPathname: this.props.location.pathname,
      currentPage: 1,
      limit: 5,
      search: this.props.search
    }
    this.queryBusinesses = this.queryBusinesses.bind(this);
    this.updateMainIndexLeftState = this.updateMainIndexLeftState.bind(this);
  }

  componentDidMount() {
    // query businesses
    this.queryBusinesses();    
  }

  componentDidUpdate(prevProps) {
    const newPath = this.props.location.pathname;
    const oldPath = prevProps.location.pathname;
    const newSearch = this.props.search;
    const oldSearch = prevProps.search;
    if (newPath !== oldPath || newSearch !== oldSearch) {
      // update currentPathname and search key then update Business for display
      this.setState({ 
          currentPathname: this.props.location.pathname, 
          search: this.props.search
        },
        () => this.queryBusinesses()
      );
    }
  }

  updateMainIndexLeftState(name, value) {
    // query bisinesses when state changed
    this.setState({ [name]: value }, () => this.queryBusinesses());
  }

  queryBusinesses() {
    // query businesses according to current path
    if (this.state.currentPathname === "/") {
      // Hot Restaurants feature
      // query 5 random businesses
      this.props.fetchBusinesses({ random: true });
    } else if (this.state.currentPathname === "/all") {
      // All Restaurents feature
      // query businesses according to currentPage and limit
      this.props.fetchBusinesses({ limit: this.state.limit, page: this.state.currentPage });
    } else if (this.state.currentPathname === "/search") {
      // Search Restaurants feature
      // query businesses match search string
      this.props.fetchBusinesses({ 
        search: this.state.search, 
        limit: this.state.limit, 
        page: this.state.currentPage 
      });
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
    const { businesses } = this.props;
    return (
      // display businesses
      <div className="business-left">
        <MainIndexTitle currentPathname={this.state.currentPathname} />
        <MainIndexList businesses={businesses}/>
        <PageLine
          updateParentState={this.updateMainIndexLeftState}
          currentPage={this.state.currentPage}
          limit={this.state.limit}
          totalItem={businesses.count}
        />
      </div>
    )
  }
}

export default withRouter(MainIndexLeft);