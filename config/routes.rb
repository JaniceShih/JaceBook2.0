Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy, :show] 
    resources :friends, only: [:create, :destroy, :show, :update] 
    resources :posts, only: [:create, :index, :show, :destroy, :update]
    resources :comments, only: [:create, :index, :show, :destroy, :update]
    resources :likes, only: [:create, :index, :show, :destroy, :update]
  end 
  
  root 'static_pages#root'

end
