class Api::RatesController < ApplicationController
  def create
    @rate = Rate.new(rate_params)
    if @rate.save!
      return render 'api/rates/show'
    else
      render json: @rate.errors.full_messages, status: 422
    end
  end

  private

  def rate_params
    params.require(:rate).permit(:user_id, :business_id, :rating)
  end
end