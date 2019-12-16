json.extract! @comment, :id, :user_id, :business_id, :body
json.extract! @comment.user, :username
json.voting do
  json.voting_result @comment.votes.sum(:voting)
  json.voting_counts @comment.votes.count(:voting)
end