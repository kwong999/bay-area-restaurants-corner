VOTING = [-1, 1]

class Vote < ApplicationRecord
  validates :voting, presence: true, inclusion: { in: VOTING }

  belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :comment,
    class_name: :Comment,
    primary_key: :id,
    foreign_key: :comment_id

end
