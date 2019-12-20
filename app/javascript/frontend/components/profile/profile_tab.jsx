import React from 'react';
import RenderRates from './rates';
import RenderComments from './comment';
import RenderVotes from './vote';
import MiddleLine from '../ui/middle_line';

class ProfileTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      limit: 2
    }
  }

  componentDidMount() {
    this.determineFetch({ limit: this.state.limit, page: this.state.currentPage });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.determineFetch({ limit: this.state.limit, page: this.state.currentPage });
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
      this.setState({ currentPage: toPage }, () => (
        this.determineFetch({ limit: this.state.limit, page: this.state.currentPage })
      ));
    }
  }

  renderPageLine() {
    const maxPage = Math.ceil(this.props.currentUser.count / this.state.limit);
    console.log('maxPage:' + maxPage);
    if (maxPage === 1) return null;
    switch (this.state.currentPage) {
      case 1:
        return (
          <>
            <p>{this.state.currentPage}/{maxPage}</p>
            <button onClick={this.handleChangePage('next')}>{'>'}</button>
          </>
        )
      case maxPage:
        return (
          <>
            <button onClick={this.handleChangePage('prev')}>{'<'}</button>
            <p>{this.state.currentPage}/{maxPage}</p>
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

  determineFetch({limit, page}) {
    switch (this.props.type) {
      case 'index':
        this.props.fetchUser(this.props.match.params.userId, { show: 'index' });
        break;
      case 'rates':
        this.props.fetchUser(this.props.match.params.userId, { show: 'rates', limit: limit, page: page });
        break;
      case 'comments':
        this.props.fetchUser(this.props.match.params.userId, { show: 'comments', limit: limit, page: page })
        break;
      case 'votes':
        this.props.fetchUser(this.props.match.params.userId, { show: 'votes', limit: limit, page: page });
        break;
      default:
        return null;
    }
  }

  render() {
    console.log(this.constructor.name);
    console.log(this.props);
    if (!this.props.currentUser) return null;
    console.log('this.state:');
    console.log(this.state);
    switch (this.props.type) {
      case 'index':
        if (!this.props.currentUser.rates) return null;
        if (!this.props.currentUser.comments) return null;
        return (
          <>
            <div className='recent-rates'>
              <h4>Recent Rates</h4>
              <ul>
                <RenderRates rates={this.props.currentUser.rates} />
              </ul>
            </div>
            <MiddleLine />
            <div className='recent-comments'>
              <h4>Recent Comments</h4>
              <ul>
                <RenderComments comments={this.props.currentUser.comments} />
              </ul>
            </div>
          </>
        )
      case 'rates':
        if (!this.props.currentUser.rates) return null;
        return (
          <>
            <div className='rates-history'>
              <h4>Rates History</h4>
              <ul>
                <RenderRates rates={this.props.currentUser.rates} />
              </ul>
            </div>
            <div className='page-line'>
              {this.renderPageLine()}
            </div>
          </>
        )
      case 'comments':
        if (!this.props.currentUser.comments) return null;
        return (
          <>
            <div className='comments-history'>
              <h4>Comments History</h4>
              <ul>
                <RenderComments comments={this.props.currentUser.comments} />
              </ul>
            </div>
            <div className='page-line'>
              {this.renderPageLine()}
            </div>
          </>
        )
      case 'votes':
        if (!this.props.currentUser.votes) return null;
        return (
          <>
            <div className='votes-history'>
              <h4>Votes History</h4>
              <ul>
                <RenderVotes votes={this.props.currentUser.votes} />
              </ul>
            </div>
            <div className='page-line'>
              {this.renderPageLine()}
            </div>
          </>
        )
      default:
        return null;
    }
  }
}

export default ProfileTab;