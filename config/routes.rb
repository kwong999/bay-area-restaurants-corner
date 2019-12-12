Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :users, only: [:show]
    resources :businesses, only: [:index, :create, :show]
    resources :comments, only: [:create, :destroy, :update]
    resources :rates, only: [:create, :destroy, :update]
  end
end
