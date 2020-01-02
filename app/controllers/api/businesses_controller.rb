class Api::BusinessesController < ApplicationController
  def index
    @count = Business.count
    if (params[:search] && params[:search].delete(' ').length > 0 && params[:limit] && params[:page])
      offset = params[:limit].to_i * ( params[:page].to_i - 1 )
      @businesses = Business
        .includes(:comments)
        .where("name LIKE ?", '%' + params[:search] + '%')
        .limit(params[:limit])
        .offset(offset)
      @count = Business.where("name LIKE ?", '%' + params[:search] + '%').count
    elsif (params[:limit] && params[:page])
      offset = params[:limit].to_i * ( params[:page].to_i - 1 )
      @businesses = Business
        .includes(:comments)
        .limit(params[:limit])
        .offset(offset)
    elsif (params[:random])
      @businesses = Business
        .includes(:comments)
        .order("RANDOM()")
        .limit(5)
      @count = 5
    else
      @businesses = Business
        .includes(:comments).all
    end
    @rating_scores = @businesses.joins(:rates).group(:id).average(:rating)
    @rating_counts = @businesses.joins(:rates).group(:id).count(:rating)
    render 'api/businesses/index'
  end

  def create
    if (params[:admin_authorization_code] && params[:admin_authorization_code] === ENV['ADMIN_AUTHORIZATION_CODE'])
      begin
        ActiveRecord::Base.transaction do
          @business = Business.new(business_params)
          if @business.save!
            @address = Address.new(address_params)
            @address.business_id = @business.id
            @hour = Hour.new(hour_params)
            @hour.business_id = @business.id
            if @address.save! && @hour.save!
              return render 'api/businesses/show'
            end
          end
        end
      rescue ActiveRecord::RecordInvalid => exception
        render json: exception.record.errors.full_messages, status: 422
      end
    else
      render json: 'Unauthorized', status: 401
    end
  end

  def show
    @business = Business.includes(:address, :hour, :comments, :rates).find(params[:id])
    if (current_user)
      @current_user_rating = Rate.where("business_id = ? AND user_id = ?", params[:id], current_user.id).first
      @current_user_votes = Vote.where(comment_id: @business.comment_ids).where(user_id: current_user.id)
      @current_user_comments = Comment.where(business_id: params[:id]).where(user_id: current_user.id)
    end
    @address = @business.address
    @hour = @business.hour
    offset = params[:limit].to_i * ( params[:page].to_i - 1 )
    @comments = Comment
      .where(business_id: params[:id])
      .includes(:user, :votes)
      .order('updated_at DESC')
      .limit(params[:limit])
      .offset(offset)
    @comments_vote_cal = Comment
      .select("comment_id AS id, SUM(votes.voting), COUNT(votes.voting)")
      .joins(:votes)
      .group(:comment_id)
      .where(business_id: params[:id]).to_a
    @rating = @business.rates
    @rating_scores = @rating.average(:rating)
    @rating_counts = @rating.count(:rating)
    render 'api/businesses/show'
  end


  private

  def business_params
    params.require(:business)
      .permit(
        :name,
        :description,
        :phone
      )
  end

  def address_params
    params.require(:business)
      .permit(
        :address_first,
        :address_second,
        :street,
        :city,
        :state,
        :zip,
        :lat,
        :lng
      )
  end

  def hour_params
    params.require(:business)
      .permit(
        :hours_mon,
        :hours_tue,
        :hours_wed,
        :hours_thu,
        :hours_fri,
        :hours_sat,
        :hours_sun
      )
  end
end