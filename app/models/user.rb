class User < ApplicationRecord    
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, :fname, :lname, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true

    after_initialize :ensure_session_token

    has_one_attached :photo

    has_many :followed_user,
        foreign_key: :user_id,
        class_name: :Friend

    has_many :followers,
        through: :followed_user,
        source: :friend


    has_many :following_user,
        foreign_key: :friend_id,
        class_name: :Friend

    has_many :following,
        through: :following_user,
        source: :user

    has_many :posts,
        foreign_key: :user_id,
        class_name: :Post

    has_many :commenters, dependent: :destroy,
        foreign_key: :user_id,
        class_name: :Comment
    
    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)
        return nil if @user.nil?
        if @user.is_password?(password)
            @user
        else
            nil
        end
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password
        @password
    end

    def password=(password)
        @password=password
        self.password_digest= BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

end
