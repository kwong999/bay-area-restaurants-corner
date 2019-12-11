class Api::BusinessesController < ApplicationController
  def index
    @businesses = Business.includes(:address, :hour).all
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
    @business = Business.includes(:address, :hour).find(params[:id])
    @address = @business.address
    @hour = @business.hour
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