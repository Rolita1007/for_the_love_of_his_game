class Family < ApplicationRecord
  has_many :athletes, dependent: :destroy
end
