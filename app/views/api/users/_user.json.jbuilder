json.extract! user, :id, :fname, :lname, :email, :birthday, :gender, :bio, :city, :workplace, :school, :hometown

if user.photo.attached?
    json.photoUrl url_for(user.photo)
end

json.followers user.followers.each do |friend| 
    json.extract! friend, :id, :fname, :lname
    if friend.photo.attached?
        json.photoUrl url_for(friend.photo)
    end
end

json.following user.following.each do |friend| 
    json.extract! friend, :id, :fname, :lname
    if friend.photo.attached?
        json.photoUrl url_for(friend.photo)
    end
end



