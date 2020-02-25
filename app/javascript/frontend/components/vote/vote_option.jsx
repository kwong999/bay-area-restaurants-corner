import React from 'react';
import VoteLineContainer from './vote_line_container';

const VoteOption = (commentId, currentUserId, votes, businessId) => {
  if (!currentUserId) return null;
  if (!votes[currentUserId]) return null;
  const vote = votes[currentUserId][commentId];
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
      user_id={currentUserId}
      business_id={businessId}
      comment_id={commentId}
      action={action}
    />
  )
}

export default VoteOption;