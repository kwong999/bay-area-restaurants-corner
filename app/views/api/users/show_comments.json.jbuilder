json.partial! '/api/users/user', user: @user
json.comments({})
json.comments do 
  json.array! @user_comments do |comment|
      json.extract! comment, :id, :body, :business_id, :business_name, :updated_at
  end
end