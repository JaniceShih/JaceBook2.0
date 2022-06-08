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
      
    end
    
end