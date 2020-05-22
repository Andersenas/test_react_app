Rails.application.routes.draw do
  namespace :admin do
    get 'streams/index'
  end

  get 'admin/index'

  # get 'pages/index'
  # post '/contact', to: 'pages#contact'
  # match '*path', to: 'pages#index', via: :all
  root 'pages#index'
  get 'twitch', to: 'pages#index'
  get 'youtube', to: 'pages#index'
  get 'twitch_streams', to: 'pages#twitch_streams'
  get 'youtube_streams', to: 'pages#youtube_streams'


  get 'admin', to: 'admin#index'
  namespace :admin do
    resources :streams
  end

end
