RATING = [
  0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0
]
class Rate < ApplicationRecord
  validates :rating, presence: true, inclusion: { in: RATING }

  belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :business,
    class_name: :Business,
    primary_key: :id,
    foreign_key: :business_id
end
