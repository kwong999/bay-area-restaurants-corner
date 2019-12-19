json.businesses do
  @businesses.each do |business|
    json.set! business.id do
      json.partial! '/api/businesses/business', business: business
      json.commentIds business.comment_ids
      json.rating do
        json.rating_avg @rating_scores[business.id] || '-'
        json.rating_counts @rating_counts[business.id] || 0
      end
    end
  end
end
json.count @count