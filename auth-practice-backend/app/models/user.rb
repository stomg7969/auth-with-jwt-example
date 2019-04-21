class User < ApplicationRecord
  has_secure_password

  validates :name, :uniqueness => { case_sensitive: false }
  validates_presence_of :name, :email, :password


  # has_secure_password => this handles everything on the bottom.
  # attr_accessor :password
  #
  # def authenticate(paintext_password)
  #   if BCrypt::Password.new(self.password_digest) == paintext_password
  #     self
  #   else
  #     false
  #   end
  # end

end
