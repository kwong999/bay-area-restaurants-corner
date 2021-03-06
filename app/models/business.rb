class Business < ApplicationRecord
  validates :name, :description, presence: true

  has_one :address,
    class_name: :Address,
    primary_key: :id,
    foreign_key: :business_id,
    dependent: :destroy

  has_one :hour,
    class_name: :Hour,
    primary_key: :id,
    foreign_key: :business_id,
    dependent: :destroy

  has_many :comments,
    class_name: :Comment,
    primary_key: :id,
    foreign_key: :business_id,
    dependent: :destroy
    
  has_many :rates,
    class_name: :Rate,
    primary_key: :id,
    foreign_key: :business_id,
    dependent: :destroy
end