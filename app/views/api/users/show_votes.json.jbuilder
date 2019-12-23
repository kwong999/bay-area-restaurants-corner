json.partial! '/api/users/user', user: @user
json.votes({})
json.votes do
  json.array! @user_votes do |vote|
    json.extract! vote, :id, :comment_id, :business_id, :voting, :comment_body, :comment_author, :comment_author_id, :business_name
  end
end
json.count @count