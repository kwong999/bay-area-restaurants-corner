import React from 'react';
import { Link } from 'react-router-dom';

function RenderComments({ comments }) {
  return comments.map(comment => (
    <li key={`comment-${comment.id}`}>
      <ul className='recent-comment'>
        <li>Restaurant Name: <Link to={`/business/${comment.business_id}`}>{comment.business_name}</Link></li>
        <li>Comment: {comment.body}</li>
      </ul>
    </li>
  ));
}

export default RenderComments;