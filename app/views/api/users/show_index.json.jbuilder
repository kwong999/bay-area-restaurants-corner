json.partial! '/api/users/user', user: @user
json.rates({})
json.rates do 
  json.array! @user_rates do |rate|
    json.extract! rate, :id, :rating, :business_id, :business_name, :updated_at
  end
end
json.comments({})
json.comments do 
  json.array! @user_comments do |comment|
      json.extract! comment, :id, :body, :business_id, :business_name, :updated_at
  end
end