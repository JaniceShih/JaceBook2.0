@posts.each do |post|
    json.set! post.id do
        json.extract! post, :id, :user_id, :body, :user_id, :created_at, :updated_at
        json.extract! post.user, :fname, :lname

        if post.user.photo.attached?
            json.user_photoUrl url_for(post.user.photo)
        end

  
        if post.photo.attached?
            json.photoUrl url_for(post.photo)
        end
      
        json.comments post.comments.each do |comment| 
            json.extract! comment, :id, :body, :user_id
            json.extract! comment.user, :fname, :lname
            if comment.user.photo.attached?
                json.photoUrl url_for(comment.user.photo)
            end

            json.likes comment.likes.each do |like| 
                json.extract! like, :id, :like_id, :like_type, :user_id
            end
        end


        json.likes post.likes.each do |like| 
            json.extract! like, :id, :like_id, :like_type, :user_id
        end
        
    end
    
end