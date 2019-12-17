import React from 'react';
import RenderRates from './rates';
import RenderComments from './comment';
import RenderVotes from './vote';

class ProfileTab extends React.Component {

  componentDidMount() {
    this.determineFetch();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.determineFetch();
    }
  }

  determineFetch() {
    switch (this.props.type) {
      case 'index':
        this.props.fetchUser(this.props.match.params.userId, { show: 'index' });
        break;
      case 'rates':
        this.props.fetchUser(this.props.match.params.userId, { show: 'rates' });
        break;
      case 'comments':
        this.props.fetchUser(this.props.match.params.userId, { show: 'comments' })
        break;
      case 'votes':
        this.props.fetchUser(this.props.match.params.userId, { show: 'votes' });
        break;
      default:
        return null;
    }
  }

  render() {
    console.log(this.constructor.name);
    console.log(this.props);
    if (!this.props.currentUser) return null;
    switch (this.props.type) {
      case 'index':
        if (!this.props.currentUser.rates) return null;
        if (!this.props.currentUser.comments) return null;
        return (
          <>
            <div className='recent-rates'>
              <h3>Recent Rates</h3>
              <ul>
                <RenderRates rates={this.props.currentUser.rates} />
              </ul>
            </div>
            <div className='recent-comments'>
              <h3>Recent Comments</h3>
              <ul>
                <RenderComments comments={this.props.currentUser.comments} />
              </ul>
            </div>
          </>
        )
      case 'rates':
        if (!this.props.currentUser.rates) return null;
        return (
          <div className='rates-history'>
            <h3>Rates History</h3>
            <ul>
              <RenderRates rates={this.props.currentUser.rates} />
            </ul>
          </div>
        )
      case 'comments':
        if (!this.props.currentUser.comments) return null;
        return (
          <div className='comments-history'>
            <h3>Comments History</h3>
            <ul>
              <RenderComments comments={this.props.currentUser.comments} />
            </ul>
          </div>
        )
      case 'votes':
        if (!this.props.currentUser.votes) return null;
        return (
          <div className='votes-history'>
            <h3>Votes History</h3>
            <ul>
              <RenderVotes votes={this.props.currentUser.votes} />
            </ul>
          </div>
        )
      default:
        return null;
    }
  }
}

export default ProfileTab;