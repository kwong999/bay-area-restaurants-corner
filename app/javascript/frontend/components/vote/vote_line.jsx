import React from 'react';

class VoteLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action: this.props.action
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(type) {
    return (e) => {
      e.preventDefault();
      const { user_id, business_id, comment_id } = this.props
      const vote = {};
      vote.user_id = user_id;
      vote.comment_id = comment_id;
      switch(type) {
        case 'upvote':
          vote.voting = 1;
          return this.sendVote(vote)
            .then( () => {
              this.setState({ action: 'Upvoted' });
              this.props.fetchBusiness(business_id);
            });
        case 'downvote':
          vote.voting = -1;
          return this.sendVote(vote)
            .then(() => {
              this.setState({ action: 'Downoted' });
              this.props.fetchBusiness(business_id);
            });
        case 'unvote':
          this.setState({ action: 'Vote' });
          this.props.destroyVote(this.props.vote.id);
          return this.props.fetchBusiness(business_id);
        default:
          return null;
      }
    }
  }

  sendVote(vote) {
    if (this.props.vote) {
      return this.props.updateVote(vote, this.props.vote.id)
    } else {
      return this.props.createVote(vote)
    }
  }

  renderDownoted() {
    return (
      <div className='vote-options'>
        <button onClick={this.handleClick('upvote')}>Upvote</button>
        <button onClick={this.handleClick('unvote')}>Unvote</button>
      </div>
    );
  }

  renderUpvoted() {
    return (
      <div className='vote-options'>
        <button onClick={this.handleClick('downvote')}>Downvote</button>
        <button onClick={this.handleClick('unvote')}>Unvote</button>
      </div>
    );
  }

  renderVote() {
    return (
      <div className='vote-options'>
        <button onClick={this.handleClick('upvote')}>Upvote</button>
        <button onClick={this.handleClick('downvote')}>Downvote</button>
      </div>
    );
  }

  handleRender() {
    switch (this.state.action) {
      case 'Downoted':
        return this.renderDownoted();
      case 'Upvoted':
        return this.renderUpvoted();
      case 'Vote':
        return this.renderVote();
      default:
        return null;
    }
  }
  render() {
    return(
      this.handleRender()
    )
  }
}

export default VoteLine;