class Hour < ApplicationRecord
  validates :business_id, uniqueness: true
  validates :hours_mon, :hours_tue, :hours_wed, :hours_thu, 
    :hours_fri, :hours_sat, :hours_sun, format: { with: /\A[0-9]{4}-[0-9]{4}\z/ }, allow_nil: true

  belongs_to :business,
    class_name: :Business,
    primary_key: :id,
    foreign_key: :business_id
end
