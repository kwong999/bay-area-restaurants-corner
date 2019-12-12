json.extract! @comment, :id, :user_id, :business_id, :body
json.extract! @comment.user, :username