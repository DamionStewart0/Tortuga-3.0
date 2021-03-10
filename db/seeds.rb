# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Driver.destroy_all
Review.destroy_all
User.destroy_all

@dame = User.create!(username: "dame", email: "dame@email.com", password_digest: '123456')
@james = User.create!(username: "james", email: "james@email.com", password_digest: '123456')
@ainsley = User.create!(username: "ainsley", email: "ainsley@email.com", password_digest: '123456')
@logan = User.create!(username: "logan", email: "logan@email.com", password_digest: '123456')

puts "#{User.count} users created"

@george = Driver.create!(img_url: " https://images.unsplash.com/photo-1598966739654-5e9a252d8c32?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHNlbGZpZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", name: "george mayweather", company: "Uber", user: @logan)
@amanda = Driver.create!(img_url: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDN8fHNlbGZpZSUyMHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60 ", name: "amanda mcdonald", company: "Uber", user: @dame)

puts "#{Driver.count} drivers created"

Review.create!(comment: "Very professional and polight. Car was clean, water and candies were also provided",  stars: 5,  driver: @george, user: @logan)
Review.create!(comment: "Great driver car was clean and smelled great she was just a little late",  stars: 4,  driver: @amanda, user: @logan )
Review.create!(comment: "Beat up old car but driver was professional and the cas was clean",  stars: 4, driver: @george, user: @dame)
Review.create!(comment: " I wish i could give 1/2 star ",  stars: 1, driver: @amanda, user: @dame)
Review.create!(comment: "Very professional and polight. Car was clean, water and candies were also provided",  stars: 3, driver: @george, user: @ainsley)
Review.create!(comment: "Very professional and polight. Car was clean, water and candies were also provided",  stars: 4, driver: @amanda, user: @ainsley)
Review.create!(comment: "Very professional and polight. Car was clean, water and candies were also provided",  stars: 5, driver: @george, user: @james)
Review.create!(comment: "Very professional and polight. Car was clean, water and candies were also provided",  stars: 4, driver: @amanda, user: @james)

puts "#{Review.count} reviews created"