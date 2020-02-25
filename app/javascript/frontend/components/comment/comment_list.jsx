import React from 'react';
import { Link } from 'react-router-dom';
import VoteOption from '../vote/vote_option'

const CommentList = (comments, currentUserId, votes, businessId) => {
  if (!comments) return null;
  return comments.map(comment => {
    const votingResult = comment.voting.voting_result;
    const votingCounts = comment.voting.voting_counts;
    let voteLine;
    if (votingCounts === 0) {
      voteLine = 'No votes';
    } else {
      if (votingResult === 0) {
        voteLine = `Even by ${votingCounts} votes`
      } else if (votingResult > 0) {
        voteLine = `Net ${votingResult} upvotes ↑ by ${votingCounts} votes`
      } else {
        voteLine = `Net ${votingResult} downvotes ↓ by ${votingCounts} votes`
      }
    }
    return (
      <li key={comment.id}>
        <p className='comment-author'>
          <Link to={`/user/${comment.user_id}/index`} props={comment.username}>{comment.username}</Link> :
          </p>
        <p>{comment.body}</p>
        <p className='vote-detail'>{voteLine}</p>
        {VoteOption(comment.id, currentUserId, votes, businessId)}
      </li>
    );
  })
}

export default CommentList;