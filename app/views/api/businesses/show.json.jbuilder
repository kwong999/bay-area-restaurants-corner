json.business do
  json.set! @business.id do
    json.partial! '/api/businesses/business', business: @business
    json.address @address, :address_first, :address_second, :street, :city, :state, :zip, :lat, :lng
    json.hour @hour, :hours_mon, :hours_tue, :hours_wed, :hours_thu, :hours_fri, :hours_sat, :hours_sun
    json.commentIds @business.comment_ids
  end
end
json.comments do
  @comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body, :user_id, :business_id
      json.extract! comment.user, :username
    end
  end
end
