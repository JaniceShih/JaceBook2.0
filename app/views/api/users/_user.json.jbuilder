json.extract! user, :id, :fname, :lname, :email, :birthday, :gender, :bio, :city, :workplace, :school, :hometown

if user.photo.attached?
    json.photoUrl url_for(user.photo)
end

json.followers user.followers.each do |friend| 
    json.extract! friend, :id, :fname, :lname
    json.status friend.following_user do |following_user|
       
        if(following_user.user_id === user.id && following_user.friend_id === friend.id)
            json.extract! following_user, :id, :user_id, :friend_id, :status
        end
    end
   
    if friend.photo.attached?
        json.photoUrl url_for(friend.photo)
    end
end

json.following user.following.each do |friend| 
    json.extract! friend, :id, :fname, :lname

    json.status friend.followed_user do |followed_user|
        if(followed_user.user_id === friend.id && followed_user.friend_id === user.id)
            json.extract! followed_user, :id, :user_id, :friend_id, :status
        end
    end
    if friend.photo.attached?
        json.photoUrl url_for(friend.photo)
    end
end



