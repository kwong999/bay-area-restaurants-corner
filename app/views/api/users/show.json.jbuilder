json.partial! '/api/users/user', user: @user
json.commentIds @user.comment_ids
json.rateIds @user.rate_ids
json.voteIds @user.vote_ids