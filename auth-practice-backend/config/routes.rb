Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      # resources :users, only: [:create, :index]
      resources :users
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
      # patch '/profile', to: 'users#update'
    end
  end
end
