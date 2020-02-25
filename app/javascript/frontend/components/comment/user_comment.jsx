import React from 'react';
import CommentFormContainer from './comment_form_container';
import LoginSignUpLine from '../ui/login_sign_up_line';

const UserComment = (currentUserId, comment, businessId) => {
  if (!currentUserId) {
    return LoginSignUpLine('comment');
  }
  if (comment.id) {
    return (
      <div className='user-comment'>
        <CommentFormContainer
          action='View'
          currentComment={comment.body}
          user_id={comment.user_id}
          business_id={comment.business_id}
          comment_id={comment.id}
        />
      </div>
    )
  } else {
    return (
      <div>
        <CommentFormContainer
          action='Create'
          currentComment=''
          user_id={currentUserId}
          business_id={businessId}
        />
      </div>
    )
  }
}

export default UserComment;