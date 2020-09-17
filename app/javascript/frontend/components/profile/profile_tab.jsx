import React from 'react';
import RenderRates from './rates';
import RenderComments from './comments';
import RenderVotes from './votes';
import MiddleLine from '../ui/middle_line';
import PageLine from '../ui/page_line';

class ProfileTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      limit: 5
    }
    this.queryProfile = this.queryProfile.bind(this);
    this.updateProfileTabState = this.updateProfileTabState.bind(this);
  }

  componentDidMount() {
    this.determineFetch({ limit: this.state.limit, page: this.state.currentPage });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.determineFetch({ limit: this.state.limit, page: this.state.currentPage });
    }
  }

  updateProfileTabState(name, value) {
    // query profile when state changed
    this.setState({ [name]: value }, () => this.queryProfile());
  }

  queryProfile() {
    this.determineFetch({ limit: this.state.limit, page: this.state.currentPage })
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
    if (this.props.ui.loading.loadingUser) return null;
    if (!this.props.currentUser) return null;
    switch (this.props.type) {
      case 'index':
        if (!this.props.currentUser.rates) return null;
        if (!this.props.currentUser.comments) return null;
        return (
          <>
            <div className='list'>
              <h4>Recent Rates</h4>
              <ul>
                <RenderRates rates={this.props.currentUser.rates} />
              </ul>
            </div>
            <MiddleLine />
            <div className='list'>
              <h4>Recent Comments</h4>
              <ul>
                <RenderComments comments={this.props.currentUser.comments} />
              </ul>
            </div>
            <MiddleLine />
          </>
        )
      case 'rates':
        if (!this.props.currentUser.rates) return null;
        return (
          <>
            <div className='list'>
              <h4>Rates History</h4>
              <ul>
                <RenderRates rates={this.props.currentUser.rates} />
              </ul>
            </div>
            <PageLine
              updateParentState={this.updateProfileTabState}
              currentPage={this.state.currentPage}
              limit={this.state.limit}
              totalItem={this.props.currentUser.count}
            />
            <MiddleLine />
          </>
        )
      case 'comments':
        if (!this.props.currentUser.comments) return null;
        return (
          <>
            <div className='list'>
              <h4>Comments History</h4>
              <ul>
                <RenderComments comments={this.props.currentUser.comments} />
              </ul>
            </div>
            <PageLine
              updateParentState={this.updateProfileTabState}
              currentPage={this.state.currentPage}
              limit={this.state.limit}
              totalItem={this.props.currentUser.count}
            />
            <MiddleLine />
          </>
        )
      case 'votes':
        if (!this.props.currentUser.votes) return null;
        return (
          <>
            <div className='list'>
              <h4>Votes History</h4>
              <ul>
                <RenderVotes votes={this.props.currentUser.votes} />
              </ul>
            </div>
            <PageLine
              updateParentState={this.updateProfileTabState}
              currentPage={this.state.currentPage}
              limit={this.state.limit}
              totalItem={this.props.currentUser.count}
            />
            <MiddleLine />
          </>
        )
      default:
        return null;
    }
  }
}

export default ProfileTab;