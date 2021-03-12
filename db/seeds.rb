# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Review.destroy_all
User.destroy_all
Driver.destroy_all

@dame = User.create!(username: "dame", email: "dame@email.com", password: '123456')
@james = User.create!(username: "james", email: "james@email.com", password: '123456')
@ainsley = User.create!(username: "ainsley", email: "ainsley@email.com", password: '123456')
@logan = User.create!(username: "logan", email: "logan@email.com", password: '123456')

puts "#{User.count} users created"

@george = Driver.create!(img_url: " https://images.unsplash.com/photo-1598966739654-5e9a252d8c32?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHNlbGZpZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", name: "George Mayweather", company: "Uber", user: @logan)
@amanda = Driver.create!(img_url: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDN8fHNlbGZpZSUyMHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60 ", name: "Amanda Mcdonald", company: "Uber", user: @dame)
@brian = Driver.create!(img_url: "https://images.unsplash.com/photo-1471015060382-6cbd8b4e34d0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTV8fG1hbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", name: "Bryan Hutchinson", company: "Lyft", user: @ainsley)
@alan = Driver.create!(img_url: "https://images.unsplash.com/photo-1541577141970-eebc83ebe30e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8bWFsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", name: "Alan Greenspan", company: "Uber", user: @james)
@jerome = Driver.create!(img_url: "https://images.unsplash.com/photo-1542190891-2093d38760f2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", name: "Jerome Bailey", company: "Lyft", user: @alogan)
@kenrick = Driver.create!(img_url: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", name: "Kenrick Stewart", company: "Uber", user: @dame)
@omar = Driver.create!(img_url: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", name: "Omar Ralph", company: "Lyft", user: @james)
@chez = Driver.create!(img_url: "https://images.unsplash.com/photo-1524538198441-241ff79d153b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", name: "Chez Powell", company: "Lyft", user: @james)
@terrence = Driver.create!(img_url: "https://images.unsplash.com/photo-1598628340414-bbf4c9e21604?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fG1hbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", name: "Terrence Lewis", company: "Uber", user: @ainsley)
@emiel = Driver.create!(img_url: "https://images.unsplash.com/photo-1494389945381-0fe114b8ea4b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODh8fG1hbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", name: "Emiel Cruz", company: "Lyft", user: @dame)

puts "#{Driver.count} drivers created"

Review.create!(comment: "Very professional and polight. Car was clean, water and candies were also provided",  stars: 5,  driver: @george, user: @logan)
Review.create!(comment: "Great driver car was clean and smelled great she was just a little late",  stars: 4,  driver: @amanda, user: @logan )
Review.create!(comment: "Beat up old car but driver was professional and the cas was clean",  stars: 4, driver: @george, user: @dame)
Review.create!(comment: " I wish i could give 1/2 star ",  stars: 1, driver: @amanda, user: @dame)
Review.create!(comment: "Very professional and polight. Car was clean, water and candies were also provided",  stars: 3, driver: @george, user: @ainsley)
Review.create!(comment: "Very professional and polight. Car was clean, water and candies were also provided",  stars: 4, driver: @amanda, user: @ainsley)
Review.create!(comment: "Very professional and polight. Car was clean, water and candies were also provided",  stars: 5, driver: @george, user: @james)
Review.create!(comment: "Very professional and polight. Car was clean, water and candies were also provided",  stars: 4, driver: @amanda, user: @james)
Review.create!(comment: "Late but very nice and professional", stars: 3, driver: @brian, user: @dame)
Review.create!(comment: "Late but very nice and professional", stars: 3, driver: @alan, user: @james)
Review.create!(comment: "Late but very nice and professional", stars: 3, driver: @jerome, user: @ainsley)
Review.create!(comment: "Late but very nice and professional", stars: 3, driver: @kenrick, user: @logan)


puts "#{Review.count} reviews created"