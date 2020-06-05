require "open-uri"
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Video.destroy_all
User.destroy_all
Comment.destroy_all
Like.destroy_all
Subscription.destroy_all

# Users
demo = User.create!(id: 1, color: '#CC0000', first_name: "Demo", last_name: "User", username:"demo", email:"demo@gmail.com", password:"password")
user1 = User.create!(id: 2, color: '#E69038', first_name: "Dylan", last_name: "Wong", username: "DylanWong97", email:"dylan@gmail.com" , password: "kazumamegumin")
user2 = User.create!(id: 3, color: '#F1C231', first_name: "Patrick", last_name: "Stewart", username: "PantsOnFire", email: "coolemail@gmail.com", password: "startrek")
user3 = User.create!(id: 4, color: '#6AA84E', first_name: "Will", last_name: "Smith", username: "Instant123", email: "anotherone@gmail.com", password: "belair")
user4 = User.create!(id: 5, color: '#44818E', first_name: "Louis", last_name: "Money", username: "StarWarsFan", email: "google@gmail.com", password: "starwars")
user5 = User.create!(id: 6, color: '#3B77D8', first_name: "Michael", last_name: "Park", username: "Anonymous93", email: "thisone@gmail.com", password: "mystery")
user6 = User.create!(id: 7, color: '#674EA7', first_name: "Shelly", last_name: "Marsh", username: "keyboardManiac", email: "nicenice@gmail.com", password: "keyboard")
user7 = User.create!(id: 8, color: '#A64C79', first_name: "Isaac", last_name: "Nam", username: "ijikman", email: "ijikman@yahoo.com", password: "baseball")

v1 = Video.create!(title: "my 4 brain cells trying to debug", author_id: 7, description: "THIS IS A GOOD VIDEO", views: 0)
# v2 = Video.create!(title: "when u have 9 strikes and its 8:59", author_id: 1)
# v3 = Video.create!(title: "ta after they tell you to look at the docs", author_id: 2)
# v4 = Video.create!(title: "learning redux", author_id: 2)
# v5 = Video.create!(title: "when u only get to phase 2", author_id: 2)

# v.video.attach(io: File.open("/mnt/c/Users/Isaac\ Nam/Desktop/newtubevids/omardance.mp4"), filename: "omardance.mp4")
v1.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/tmntpractice.mp4"), filename: "tmntpractice.mp4")
# v2.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/dantecrazyfrog.mp4"), filename: "dantecrazyfrog.mp4")
# v3.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/rengarlaugh.mp4"), filename: "rengarlaugh.mp4")
# v4.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/michaelscottKillmyself.mp4"), filename: "michaelscottKillmyself.mp4")
# v5.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/whatsWrongWithYou.mp4"), filename: "whatsWrongWithYou.mp4")

v1.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/intling.png"), filename: "intling.png")




