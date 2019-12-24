class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end
  
  def show
    @user = User.find(params[:id]);
    if @user.role === 'Admin'
      return render json: 'access denied', status: 401
    end
    case params[:show]
    when 'index'
      @user_rates = user_rates(@user, 5, 1)
      @user_comments = user_comments(@user, 5, 1)
      render 'api/users/show_index'
    when 'rates'
      @user_rates = user_rates(@user, params[:limit], params[:page])
      @count = @user.rates.count
      render 'api/users/show_rates'
    when 'comments'
      @user_comments = user_comments(@user, params[:limit], params[:page])
      @count = @user.comments.count
      render 'api/users/show_comments'
    when 'votes'
      @user_votes = user_votes(@user, params[:limit], params[:page])
      @count = @user.votes.count
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

  def user_rates(user, limit, page)
    offset = limit.to_i * ( page.to_i - 1 )
    user
      .rates
      .includes(:business)
      .order('updated_at DESC')
      .limit(limit)
      .offset(offset)
      .map{ |rate| rate.as_json.merge("business_name" => rate.business.name).symbolize_keys }
  end

  def user_comments(user, limit, page)
    offset = limit.to_i * ( page.to_i - 1 )
    user
      .comments
      .includes(:business)
      .order('updated_at DESC')
      .limit(limit)
      .offset(offset)
      .map{ |comment| comment.as_json.merge("business_name" => comment.business.name).symbolize_keys }
  end

  def user_votes(user, limit, page)
    offset = limit.to_i * ( page.to_i - 1 )
    user
      .votes
      .includes({
        :comment => :business,
        :comment => :user
        })
      .order('updated_at DESC')
      .limit(limit)
      .offset(offset)
      .map{ |vote| vote.as_json.merge({
        "comment_body" => vote.comment.body,
        "comment_author" => vote.comment.user.username,
        "comment_author_id" => vote.comment.user_id,
        "business_id" => vote.comment.business.id,
        "business_name" => vote.comment.business.name
        }).symbolize_keys }
  end
end