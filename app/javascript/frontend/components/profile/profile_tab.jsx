import React from 'react';
import RenderRates from './rates';
import RenderComments from './comment';
import RenderVotes from './vote';
import MiddleLine from '../ui/middle_line';

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
          <div className='rates-history'>
            <h4>Rates History</h4>
            <ul>
              <RenderRates rates={this.props.currentUser.rates} />
            </ul>
          </div>
        )
      case 'comments':
        if (!this.props.currentUser.comments) return null;
        return (
          <div className='comments-history'>
            <h4>Comments History</h4>
            <ul>
              <RenderComments comments={this.props.currentUser.comments} />
            </ul>
          </div>
        )
      case 'votes':
        if (!this.props.currentUser.votes) return null;
        return (
          <div className='votes-history'>
            <h4>Votes History</h4>
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