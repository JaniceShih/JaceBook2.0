class Friend < ApplicationRecord

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User,
        optional: true

    belongs_to :friend,
        foreign_key: :friend_id,
        class_name: :User,
        optional: true

end
