# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                      root GET    /                                                                                        static_pages#root
#           api_video_likes GET    /api/videos/:video_id/likes(.:format)                                                    api/likes#index {:format=>"json"}
#        api_video_comments GET    /api/videos/:video_id/comments(.:format)                                                 api/comments#index {:format=>"json"}
#                api_videos GET    /api/videos(.:format)                                                                    api/videos#index {:format=>"json"}
#                           POST   /api/videos(.:format)                                                                    api/videos#create {:format=>"json"}
#                 api_video GET    /api/videos/:id(.:format)                                                                api/videos#show {:format=>"json"}
#                           DELETE /api/videos/:id(.:format)                                                                api/videos#destroy {:format=>"json"}
#                 api_likes POST   /api/likes(.:format)                                                                     api/likes#create {:format=>"json"}
#                  api_like DELETE /api/likes/:id(.:format)                                                                 api/likes#destroy {:format=>"json"}
#              api_comments POST   /api/comments(.:format)                                                                  api/comments#create {:format=>"json"}
#               api_comment DELETE /api/comments/:id(.:format)                                                              api/comments#destroy {:format=>"json"}
#    api_user_subscriptions GET    /api/users/:user_id/subscriptions(.:format)                                              api/subscriptions#index {:format=>"json"}
#                 api_users POST   /api/users(.:format)                                                                     api/users#create {:format=>"json"}
#                  api_user GET    /api/users/:id(.:format)                                                                 api/users#show {:format=>"json"}
#         api_subscriptions POST   /api/subscriptions(.:format)                                                             api/subscriptions#create {:format=>"json"}
#          api_subscription DELETE /api/subscriptions/:id(.:format)                                                         api/subscriptions#destroy {:format=>"json"}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>"json"}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>"json"}
#                api_search GET    /api/search(.:format)                                                                    api/videos#search {:format=>"json"}
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to:'static_pages#root'
  
  namespace :api, defaults: {format: 'json'} do
    
    resources :videos, only: [:create, :index, :show, :destroy] do
      resources :likes, only: [:index]
      resources :comments, only: [:index] 
    end
    
    resources :likes, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy]
    resources :users, only: [:create, :show] do
      resources :subscriptions, only: [:index]
    end

    resources :subscriptions, only: [:destroy, :create]
    resource :session, only: [:create, :destroy]
    get :search, controller: :videos
  end
end
