class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end
  
  def show
    @user = User.find(params[:id]);
    case params[:show]
    when 'index'
      @user_rates = @user
        .rates
        .includes(:business)
        .order('updated_at DESC')
        .limit(5)
        .map{ |rate| rate.as_json.merge("business_name" => rate.business.name).symbolize_keys }
      @user_comments = @user
        .comments
        .includes(:business)
        .order('updated_at DESC')
        .limit(5)
        .map{ |comment| comment.as_json.merge("business_name" => comment.business.name).symbolize_keys }
      render 'api/users/show_index'
    when 'votes'
      @user_votes = @user
        .votes
        .includes({
          :comment => :business,
          :comment => :user
          })
        .order('updated_at DESC')
        .map{ |vote| vote.as_json.merge({
          "comment_body" => vote.comment.body,
          "comment_author" => vote.comment.user.username,
          "business_id" => vote.comment.business.id,
          "business_name" => vote.comment.business.name
          }).symbolize_keys }
      render 'api/users/show_votes'
    else
      render 'api/users/show'
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end