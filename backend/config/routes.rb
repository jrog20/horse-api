Rails.application.routes.draw do
  resources :offsprings
  namespace :api do
    namespace :v1 do
      resources :horses
    end
  end
end
