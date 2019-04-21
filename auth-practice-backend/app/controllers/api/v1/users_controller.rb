class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: [:create, :show, :index]

  def index
    user = User.all
    render json: user
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def profile
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end

  def create
    user = User.create(user_params)
    if user.valid?
      token = encode_token({user_id: user.id, name: user.name})
      render json: { user: UserSerializer.new(user), jwt: token }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
    end
  end

  def update
    user = User.find(params[:id])
    user.update(password: params[:user][:password])
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :password)
  end

end
