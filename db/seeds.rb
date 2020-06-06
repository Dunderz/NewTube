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

v1 = Video.create!(title: "The Dark Knight Rises Official Movie Trailer (2012)", author_id: 1, description: "The Dark Knight Rises is a 2012 superhero film directed by Christopher Nolan, who co-wrote the screenplay with his brother Jonathan Nolan, and the story with David S. Goyer.[5] Based on the DC Comics character Batman, it is the final installment in Nolan's The Dark Knight Trilogy, and the sequel to The Dark Knight (2008).", views: 0)
v2 = Video.create!(title: "Mario Kart 8 - Dolphin Shoals - Music", author_id: 3, description: "Mario Kart 8 music composed by Shiho Fuiji / Atsuko Asahi / Ryo Nagamatsu / Yasuaki Iwata. Released 2014", views: 0)
v3 = Video.create!(title: "TENET - Official Trailer", author_id: 5, description: "From Director Christopher Nolan. #TENET, coming to theaters 7.17.20. Watch the new trailer now.", views: 0)
v4 = Video.create!(title: "French Bulldog Temper Tantrum", author_id: 7, description: "My dog is so cute!!!", views: 0)
v5 = Video.create!(title: "when u pass rails 2", author_id: 2, description: "that test was mad hard lmao", views: 0)
v6 = Video.create!(title: "Madeon - Dream Dream Dream (Official Audio)", author_id: 4, description: "HELLO. This song is called Dream Dream Dream and it’s one of the songs i’ve made i’m happiest with, I’m so thrilled to share it with you! I think it captures what I wanted Good Faith to feel like, it’s gonna be the opening song of the project.", views: 0)
v7 = Video.create!(title: "TRON Legacy (End Titles)", author_id: 6, description: "Provided to YouTube by Universal Music Group. TRON Legacy (End Titles) · Daft Punk", views: 0)
v8 = Video.create!(title: "Star Wars: The Rise of Skywalker (FULL MOVIE)", author_id: 8, description: "Star Wars: The Rise of Skywalker (also known as Star Wars: Episode IX – The Rise of Skywalker) is a 2019 American epic space opera film produced, co-written, and directed by J. J. Abrams. It is the third installment of the Star Wars sequel trilogy.", views: 0)
v9 = Video.create!(title: "when u have 9 strikes and its 8:59", author_id: 1, description: "better hurry up", views: 0)
v10 = Video.create!(title: "Paul Stanley - Live to Win (2006)", author_id: 4, description: "How do you kill that which has no life?", views: 0)
v11 = Video.create!(title: "learning redux", author_id: 5, description: "literally impossible to learn", views: 0)
v12 = Video.create!(title: "yamero", author_id: 2, description: "haha u clicked on this video", views: 0)
v13 = Video.create!(title: "O(1) runtime", author_id: 1, description: "zoom zoom", views: 0)
v14 = Video.create!(title: "when u think u finished app academy", author_id: 6, description: "Confusion 100", views: 0)
v15 = Video.create!(title: "ouch", author_id: 8, description: ":(", views: 0)
v16 = Video.create!(title: "Interstellar Movie - Official Trailer", author_id: 3, description: "The official Interstellar movie trailer from Christopher Nolan, starring Matthew McConaughey. http://www.InterstellarMovie.com/", views: 0)
v17 = Video.create!(title: "ta after they tell you to look at the docs", author_id: 4, description: "sad noise", views: 0)
v18 = Video.create!(title: "ur face when app academy became remote", author_id: 1, description: "stuck between a rock and a hard place", views: 0)
v19 = Video.create!(title: "my 4 brain cells trying to debug", author_id: 8, description: "Gru is the most powerful being in the universe, and here’s why: according to the height of a Minion (which is 3.5 feet on average) Gru is 4 minions tall, which means he is a godly size of 14 feet tall. Second if any of you remember the original Despicable Me, you Know there is a scene when Vector kidnaps the three girls and shoots a series of heat-seeking misses at Gru, he then dodge them all. ", views: 0)

# v2 = Video.create!(title: "when u have 9 strikes and its 8:59", author_id: 1)
# v3 = Video.create!(title: "ta after they tell you to look at the docs", author_id: 2)
# v4 = Video.create!(title: "learning redux", author_id: 2)
# v5 = Video.create!(title: "when u only get to phase 2", author_id: 2)

# v.video.attach(io: File.open("/mnt/c/Users/Isaac\ Nam/Desktop/newtubevids/omardance.mp4"), filename: "omardance.mp4")
v1.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/darkKnightRises.mp4"), filename: "darkKnightRises.mp4")
v2.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/dolphinShoals.mp4"), filename: "dolphinShoals.mp4")
v3.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/tenetOfficialTrailer.mp4"), filename: "tenetOfficialTrailer.mp4")
v4.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/frenchBullDogTemperTantrum.mp4"), filename: "frenchBullDogTemperTantrum.mp4")
v5.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/omarDance.mp4"), filename: "omarDance.mp4")
v6.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/dreamDreamDream.mp4"), filename: "dreamDreamDream.mp4")
v7.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/tronLegacyEndTitles.mp4"), filename: "tronLegacyEndTitles.mp4")
v8.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/ronaldinhoSoccer.mp4"), filename: "ronaldinhoSoccer.mp4")
v9.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/dantecrazyfrog.mp4"), filename: "dantecrazyfrog.mp4")
v10.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/liveToWin.mp4"), filename: "liveToWin.mp4")
v11.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/michaelscottKillmyself.mp4"), filename: "michaelscottKillmyself.mp4")
v12.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/yamero.mp4"), filename: "yamero.mp4")
v13.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/starMarioKart.mp4"), filename: "starMarioKart.mp4")
v14.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/danteWhatTheHellisThis.mp4"), filename: "danteWhatTheHellisThis.mp4")
v15.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/whatsgoingon_.mp4"), filename: "whatsgoingon_.mp4")
v16.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/interstellar.mp4"), filename: "interstellar.mp4")
v17.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/rengarlaugh.mp4"), filename: "rengarlaugh.mp4")
v18.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/shitHappens.mp4"), filename: "shitHappens.mp4")
v19.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/tmntpractice.mp4"), filename: "tmntpractice.mp4")

# v2.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/dantecrazyfrog.mp4"), filename: "dantecrazyfrog.mp4")
# v3.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/rengarlaugh.mp4"), filename: "rengarlaugh.mp4")
# v4.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/michaelscottKillmyself.mp4"), filename: "michaelscottKillmyself.mp4")
# v5.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/whatsWrongWithYou.mp4"), filename: "whatsWrongWithYou.mp4")

v1.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/darkknighttrailer.jpg"), filename: "darkknighttrailer.jpg")
v2.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/dolphinShoals.png"), filename: "dolphinShoals.png")
v3.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/tenetTrailer.jpg"), filename: "tenetTrailer.jpg")
v4.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/frenchBullDogTemperTantrum.png"), filename: "frenchBullDogTemperTantrum.png")
v5.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/omarDance.png"), filename: "omarDance.png")
v6.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/dreamDreamDream.png"), filename: "dreamDreamDream.png")
v7.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/tronLegacyEndTitles.png"), filename: "tronLegacyEndTitles.png")
v8.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/riseOfSkywalker.png"), filename: "riseOfSkywalker.png")
v9.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/danteCrazyFrog.png"), filename: "danteCrazyFrog.png")
v10.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/liveToWin.png"), filename: "liveToWin.png")
v11.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/noYouGuess.JPG"), filename: "noYouGuess.JPG")
v12.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/yamero.png"), filename: "yamero.png")
v13.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/704228.png"), filename: "704228.png")
v14.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/danteWhatTheHell.png"), filename: "danteWhatTheHell.png")
v15.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/kayle.jpg"), filename: "kayle.jpg")
v16.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/interstellarTrailer.jpg"), filename: "interstellarTrailer.jpg")
v17.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/lebronMad.JPG"), filename: "lebronMad.JPG")
v18.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/shitHappens.jpg"), filename: "shitHappens.jpg")
v19.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/tmntPractice.png"), filename: "tmntPractice.png")




