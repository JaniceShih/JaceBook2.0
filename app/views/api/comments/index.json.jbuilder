@comments.each do |comment|
    json.set! comment.id do 
        json.extract! comment, :id, :body, :user_id, :post_id, :created_at, :updated_at

        json.extract! comment.user, :id, :fname, :lname
    end
end