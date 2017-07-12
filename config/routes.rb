Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'welcome/index'

  resources :families

  resources :athletes do
    resources :families
  end

  root "welcome#index"

end
