class Address < ApplicationRecord
  validates :business_id, uniqueness: true
  
  belongs_to :business,
    class_name: :Business,
    primary_key: :id,
    foreign_key: :business_id
end