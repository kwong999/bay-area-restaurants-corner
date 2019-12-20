json.business do
  json.set! @business.id do
    json.partial! '/api/businesses/business', business: @business
    json.address @address, :address_first, :address_second, :street, :city, :state, :zip
    json.pos do 
      json.extract! @address, :lat, :lng
    end
    json.hour @hour, :hours_mon, :hours_tue, :hours_wed, :hours_thu, :hours_fri, :hours_sat, :hours_sun
    json.commentIds @business.comment_ids
    json.rating do
      json.rating_avg @rating_scores || '-'
      json.rating_counts @rating_counts || 0
    end
  end
end
json.comments do
  json.set! @business.id do
    json.array! @comments do |comment|
      json.extract! comment, :id, :body, :user_id, :business_id
      json.extract! comment.user, :username
      json.voting do
        json.voting_result comment.votes.sum(:voting)
        json.voting_counts comment.votes.count(:voting)
      end
    end
  end
  json.current_user ({})
  if (current_user && @current_user_comments.length > 0)
    json.current_user do
      json.extract! @current_user_comments[0], :id, :body, :user_id, :business_id
    end
  end
end
json.rates do
  if (current_user && @current_user_rating)
    json.set! current_user.id do
      json.extract! @current_user_rating, :id, :user_id, :business_id, :rating
    end
  end
end
json.votes do
  if (current_user && @current_user_votes.length > 0)
    json.set! current_user.id do
      @current_user_votes.each do |vote|
        json.set! vote.comment_id do
          json.extract! vote, :id, :user_id, :comment_id, :voting
        end
      end
    end
  elsif (current_user)
    json.set! current_user.id, {}
  end
end
