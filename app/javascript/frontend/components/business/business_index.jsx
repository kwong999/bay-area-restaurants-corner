import React from 'react';
import BusinessShort from './business_short';

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      limit: 3,
      random: (this.props.search) ? false : true
    }
  }

  componentDidMount() {
    if (this.props.search) {
      this.props.fetchBusinesses({ search: this.props.search, limit: this.state.limit, page: this.state.currentPage});
    } else {
      this.props.fetchBusinesses({ random: true });
    }
  }

  handleChangePage(type, num) {
    let toPage;
    switch (type) {
      case 'prev':
        toPage = this.state.currentPage - 1;
        break;
      case 'next':
        toPage = this.state.currentPage + 1;
        break;
      case 'to':
        toPage = num;
        break;
    }
    return (e) => {
      e.preventDefault();
      this.setState({ currentPage: toPage }, () => {
        if (this.props.search) {
          this.props.fetchBusinesses({ search: this.props.search, limit: this.state.limit, page: this.state.currentPage });
        } else {
          this.props.fetchBusinesses({ random: true });
        }
      });
    }
  }


  renderTitle() {
    if (this.props.search) {
      return `Search result of '${this.props.search}'`;
    } else {
      return 'Restaurants you might interested in:';
    }
  }

  renderBusinessList() {
    const businessList = Object.keys(this.props.businesses)
      .filter(key => key != 'count')
      .map( key => this.props.businesses[key]);
    if (Object.keys(this.props.businesses).length > 0) {
      return businessList.map( (business) => 
        <BusinessShort business={business} key={business.id}/>
      )
    } else {
      return null;
    }
  }
  
  renderPageLine() {
    const maxPage = Math.ceil(this.props.businesses.count / this.state.limit);
    console.log('maxPage:' + maxPage);
    if (maxPage <= 1) return null;
    switch (this.state.currentPage) {
      case 1:
        return (
          <>
            <button id='hidden'>{'<'}</button>
            <p>{this.state.currentPage}/{maxPage}</p>
            <button onClick={this.handleChangePage('next')}>{'>'}</button>
          </>
        )
      case maxPage:
        return (
          <>
            <button onClick={this.handleChangePage('prev')}>{'<'}</button>
            <p>{this.state.currentPage}/{maxPage}</p>
            <button id='hidden'>{'>'}</button>
          </>
        )
      default:
        return (
          <>
            <button onClick={this.handleChangePage('prev')}>{'<'}</button>
            <p>{this.state.currentPage}/{maxPage}</p>
            <button onClick={this.handleChangePage('next')}>{'>'}</button>
          </>
        )
    }
  }

  render() {
    if (this.props.ui.loadingBusiness) return null;
    return(
      <div className='business'>
        <h3>{this.renderTitle()}</h3>
        <ul className='business-list'>
          {this.renderBusinessList()}
        </ul>
        <div id='page-line'>
          {this.renderPageLine()}
        </div>
      </div>
    )
  };
}

export default BusinessIndex;