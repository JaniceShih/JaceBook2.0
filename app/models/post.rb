class Post < ApplicationRecord

    validates :body, presence: true

    # :photo just naming for association.
    has_one_attached :photo

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

end
