class Api::BusinessesController < ApplicationController
  def index
    @businesses = Business.includes(:comments).all
    @rating_scores = Business.joins(:rates).group(:id).average(:rating)
    @rating_counts = Business.joins(:rates).group(:id).count(:rating)
    render 'api/businesses/index'
  end

  def create
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
  end

  def show
    @business = Business.includes(:address, :hour, :comments, :rates).find(params[:id])
    if (current_user)
      @current_user_rating = Rate.where("business_id = ? AND user_id = ?", params[:id], current_user.id).first
    end
    @address = @business.address
    @hour = @business.hour
    @comments = @business.comments.includes(:user)
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