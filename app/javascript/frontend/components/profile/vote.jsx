import React from 'react';
import { Link } from 'react-router-dom';

function RenderVotes({ votes }) {
  const vote_line = (votes.voting === 1) ? "Upvoted ↑" : "Downvoted ↓";
  return votes.map(vote => (
    <li key={`vote-${vote.id}`}>
      <ul className='vote'>
        <li>Business Name: <Link to={`/business/${vote.business_id}`}>{vote.business_name}</Link></li>
        <li>Comment: {vote.comment_body}</li>
        <li>Author: {vote.comment_author}</li>
        <li>Vote: {vote_line}</li>
      </ul>
    </li>
  ));
}

export default RenderVotes;