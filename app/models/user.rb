class User < ApplicationRecord
  attr_reader :password
  
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6}, allow_nil: true
  
  after_initialize :ensure_session_token

  has_many :comments,
    class_name: :Comment,
    primary_key: :id,
    foreign_key: :user_id,
    dependent: :destroy
    
  has_many :rates,
    class_name: :Rate,
    primary_key: :id,
    foreign_key: :user_id,
    dependent: :destroy

  has_many :votes,
    class_name: :Vote,
    primary_key: :id,
    foreign_key: :user_id,
    dependent: :destroy

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    return BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    self.save!
    self.session_token
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  private

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end

  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def generate_unique_session_token
    self.session_token = generate_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = generate_session_token
    end
    self.session_token
  end
end
