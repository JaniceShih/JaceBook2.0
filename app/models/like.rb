class Like < ApplicationRecord

    belongs_to :like, polymorphic: true
    
end
