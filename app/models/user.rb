class User < ActiveRecord::Base
  has_many :stats, foreign_key: :player_id
  has_many :games, through: :stats

  validates :username, :password, presence: true
  has_secure_password
end
