json.businesses do
  @businesses.each do |business|
    json.set! business.id do
      json.partial! '/api/businesses/business', business: business
      json.commentIds business.comment_ids
    end
  end
end