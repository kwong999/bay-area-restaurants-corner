import React from 'react';

class VoteOptions extends React.Component {
  render() {
    if (!this.props.currentUserId) return null;
    const vote = this.props.votes[this.props.currentUserId][commentId]
    let action;
    if (!vote) {
      action = 'Vote';
    } else {
      if (vote.voting === 1) {
        action = 'Upvoted';
      } else {
        action = 'Downoted';
      }
    }
    return (
      <VoteLineContainer
        vote={vote}
        user_id={this.props.currentUserId}
        comment_id={commentId}
        action={action}
      />
    )
  }
}

export default VoteOptions;