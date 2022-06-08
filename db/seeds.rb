# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.destroy_all
User.destroy_all

demo = User.create!(fname: 'Demo', lname: 'User', email: 'demo@gmail.com', password: '123456')
janice = User.create!(fname: 'Janice', lname: 'Shih', email: 'janice@gmail.com', password: '123456')

post = Post.create!(body: "AWS is coming soooon!", user_id: demo.id)
