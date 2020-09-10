import React from 'react';
import { withRouter } from 'react-router-dom'
import Loader from '../ui/loader';
import MainIndexTitle from './main_index_title';

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
    this.props.fetchBusinesses({ random: true });
  }

  render() {
    const loading = this.props.ui.loading.loadingBusiness;
    console.log(this.props);
    if (loading) {
      return (
        <div className='business-left'>
          <Loader />
        </div>
      )
    }
    return (
      <div className='business-left'>
        <MainIndexTitle currentPathname={this.state.currentPathname} />
      </div>
    )
  }
}

export default withRouter(MainIndexLeft);