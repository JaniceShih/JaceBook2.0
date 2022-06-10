json.extract! user, :id, :fname, :lname, :email, :birthday, :gender, :bio, :city, :workplace, :school, :hometown

if user.photo.attached?
    json.photoUrl url_for(user.photo)
end


