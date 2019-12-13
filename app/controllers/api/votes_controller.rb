class Api::VotesController < ApplicationController
  def create
    @vote = Vote.new(vote_params)
    if @vote.save!
      return render 'api/votes/show'
    else
      render json: @vote.errors.full_messages, status: 422
    end
  end

  def update
    @vote = Vote.find(params[:id])
    if @vote.update(vote_params)
      return render 'api/votes/show'
    else
      render json: @vote.errors.full_messages, status: 422
    end
  end

  def destroy
    @vote = Vote.find(params[:id])
    @vote.destroy
    render json: 'success'
  end

  private
  def vote_params
    params.require(:vote).permit(:user_id, :comment_id, :voting)
  end
end