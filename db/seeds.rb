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
demo = User.create!(color: '#CC0000', first_name: "Demo", last_name: "User", username:"demo", email:"demo@gmail.com", password:"password")
user1 = User.create!(color: '#E69038', first_name: "Dylan", last_name: "Wong", username: "DylanWong97", email:"dylan@gmail.com" , password: "kazumamegumin")
user2 = User.create!(color: '#F1C231', first_name: "Patrick", last_name: "Stewart", username: "PantsOnFire", email: "coolemail@gmail.com", password: "startrek")
user3 = User.create!(color: '#6AA84E', first_name: "Will", last_name: "Smith", username: "Instant123", email: "anotherone@gmail.com", password: "belair")
user4 = User.create!(color: '#44818E', first_name: "Louis", last_name: "Money", username: "StarWarsFan", email: "google@gmail.com", password: "starwars")
user5 = User.create!(color: '#3B77D8', first_name: "Michael", last_name: "Park", username: "Anonymous93", email: "thisone@gmail.com", password: "mystery")
user6 = User.create!(color: '#674EA7', first_name: "Shelly", last_name: "Marsh", username: "keyboardManiac", email: "nicenice@gmail.com", password: "keyboard")
user7 = User.create!(color: '#A64C79', first_name: "Isaac", last_name: "Nam", username: "ijikman", email: "ijikman@yahoo.com", password: "baseball")

v1 = Video.create!(title: "The Dark Knight Rises Official Movie Trailer (2012)", author_id: demo.id, description: "The Dark Knight Rises is a 2012 superhero film directed by Christopher Nolan, who co-wrote the screenplay with his brother Jonathan Nolan, and the story with David S. Goyer.[5] Based on the DC Comics character Batman, it is the final installment in Nolan's The Dark Knight Trilogy, and the sequel to The Dark Knight (2008).", views: 14)
# v2 = Video.create!(id: 2, title: "Mario Kart 8 - Dolphin Shoals - Music", author_id: 3, description: "Mario Kart 8 music composed by Shiho Fuiji / Atsuko Asahi / Ryo Nagamatsu / Yasuaki Iwata. Released 2014", views: 9)
# v3 = Video.create!(id: 3, title: "TENET - Official Trailer", author_id: 5, description: "From Director Christopher Nolan. #TENET, coming to theaters 7.17.20. Watch the new trailer now.", views: 3)
# v4 = Video.create!(id: 4, title: "French Bulldog Temper Tantrum", author_id: 7, description: "My dog is so cute!!!", views: 12)
# v5 = Video.create!(id: 5, title: "when u pass rails 2", author_id: 2, description: "that test was mad hard lmao", views: 23)
# v6 = Video.create!(id: 6, title: "Madeon - Dream Dream Dream (Official Audio)", author_id: 4, description: "HELLO. This song is called Dream Dream Dream and it’s one of the songs i’ve made i’m happiest with, I’m so thrilled to share it with you! I think it captures what I wanted Good Faith to feel like, it’s gonna be the opening song of the project.", views: 38)
# v7 = Video.create!(id: 7, title: "TRON Legacy (End Titles)", author_id: 6, description: "Provided to YouTube by Universal Music Group. TRON Legacy (End Titles) · Daft Punk", views: 0)
# v8 = Video.create!(id: 8, title: "Star Wars: The Rise of Skywalker (FULL MOVIE)", author_id: 8, description: "Star Wars: The Rise of Skywalker (also known as Star Wars: Episode IX – The Rise of Skywalker) is a 2019 American epic space opera film produced, co-written, and directed by J. J. Abrams. It is the third installment of the Star Wars sequel trilogy.", views: 19)
# v9 = Video.create!(id: 9, title: "when u have 9 strikes and its 8:59", author_id: 1, description: "better hurry up", views: 1)
# v10 = Video.create!(id: 10, title: "Paul Stanley - Live to Win (2006)", author_id: 4, description: "How do you kill that which has no life?", views: 0)
# v11 = Video.create!(id: 11, title: "learning redux", author_id: 5, description: "literally impossible to learn", views: 7)
# v12 = Video.create!(id: 12, title: "yamero", author_id: 2, description: "haha u clicked on this video", views: 6)
# v13 = Video.create!(id: 13, title: "O(1) runtime", author_id: 1, description: "zoom zoom", views: 8)
# v14 = Video.create!(id: 14, title: "when u think u finished app academy", author_id: 6, description: "Confusion 100", views: 31)
# v15 = Video.create!(id: 15, title: "ouch", author_id: 8, description: ":(", views: 20)
# v16 = Video.create!(id: 16, title: "Interstellar Movie - Official Trailer", author_id: 3, description: "The official Interstellar movie trailer from Christopher Nolan, starring Matthew McConaughey. http://www.InterstellarMovie.com/", views: 43)
# v17 = Video.create!(id: 17, title: "ta after they tell you to look at the docs", author_id: 4, description: "sad noise", views: 11)
# v18 = Video.create!(id: 18, title: "ur face when app academy became remote", author_id: 1, description: "stuck between a rock and a hard place", views: 27)
# v19 = Video.create!(id: 19, title: "my 4 brain cells trying to debug", author_id: 8, description: "Gru is the most powerful being in the universe, and here’s why: according to the height of a Minion (which is 3.5 feet on average) Gru is 4 minions tall, which means he is a godly size of 14 feet tall. Second if any of you remember the original Despicable Me, you Know there is a scene when Vector kidnaps the three girls and shoots a series of heat-seeking misses at Gru, he then dodge them all. ", views: 9)

v1.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/darkKnightRises.mp4"), filename: "darkKnightRises.mp4")
# v2.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/dolphinShoals.mp4"), filename: "dolphinShoals.mp4")
# v3.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/tenetOfficialTrailer.mp4"), filename: "tenetOfficialTrailer.mp4")
# v4.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/frenchBullDogTemperTantrum.mp4"), filename: "frenchBullDogTemperTantrum.mp4")
# v5.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/omarDance.mp4"), filename: "omarDance.mp4")
# v6.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/dreamDreamDream.mp4"), filename: "dreamDreamDream.mp4")
# v7.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/tronLegacyEndTitles.mp4"), filename: "tronLegacyEndTitles.mp4")
# v8.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/ronaldinhoSoccer.mp4"), filename: "ronaldinhoSoccer.mp4")
# v9.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/dantecrazyfrog.mp4"), filename: "dantecrazyfrog.mp4")
# v10.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/liveToWin.mp4"), filename: "liveToWin.mp4")
# v11.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/michaelscottKillmyself.mp4"), filename: "michaelscottKillmyself.mp4")
# v12.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/yamero.mp4"), filename: "yamero.mp4")
# v13.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/starMarioKart.mp4"), filename: "starMarioKart.mp4")
# v14.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/danteWhatTheHellisThis.mp4"), filename: "danteWhatTheHellisThis.mp4")
# v15.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/whatsgoingon_.mp4"), filename: "whatsgoingon_.mp4")
# v16.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/interstellar.mp4"), filename: "interstellar.mp4")
# v17.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/rengarlaugh.mp4"), filename: "rengarlaugh.mp4")
# v18.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/shitHappens.mp4"), filename: "shitHappens.mp4")
# v19.video.attach(io: open("https://newtube-dev.s3.amazonaws.com/tmntpractice.mp4"), filename: "tmntpractice.mp4")

v1.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/darkknighttrailer.jpg"), filename: "darkknighttrailer.jpg")
# v2.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/dolphinShoals.png"), filename: "dolphinShoals.png")
# v3.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/tenetTrailer.jpg"), filename: "tenetTrailer.jpg")
# v4.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/frenchBullDogTemperTantrum.png"), filename: "frenchBullDogTemperTantrum.png")
# v5.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/omarDance.png"), filename: "omarDance.png")
# v6.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/dreamDreamDream.png"), filename: "dreamDreamDream.png")
# v7.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/tronLegacyEndTitles.png"), filename: "tronLegacyEndTitles.png")
# v8.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/riseOfSkywalker.png"), filename: "riseOfSkywalker.png")
# v9.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/danteCrazyFrog.png"), filename: "danteCrazyFrog.png")
# v10.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/liveToWin.png"), filename: "liveToWin.png")
# v11.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/noYouGuess.JPG"), filename: "noYouGuess.JPG")
# v12.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/yamero.png"), filename: "yamero.png")
# v13.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/704228.png"), filename: "704228.png")
# v14.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/danteWhatTheHell.png"), filename: "danteWhatTheHell.png")
# v15.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/kayle.jpg"), filename: "kayle.jpg")
# v16.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/interstellarTrailer.jpg"), filename: "interstellarTrailer.jpg")
# v17.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/lebronMad.JPG"), filename: "lebronMad.JPG")
# v18.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/shitHappens.jpg"), filename: "shitHappens.jpg")
# v19.thumbnail.attach(io: open("https://newtube-dev.s3.amazonaws.com/tmntPractice.png"), filename: "tmntPractice.png")

# Video 1
c1 = Comment.create!(body: "wow this is movie looks amazing", video_id: v1.id, user_id: demo.id, username: "demo", commentable_type: "Video", commentable_id: v1.id)
c2 = Comment.create!(body: "yeah he's my favorite director", video_id: v1.id, user_id: user2.id, username: "DylanWong97", commentable_type: "Comment", commentable_id: c1.id)
c3 = Comment.create!(body: "Honestly I think this movie is overrated.", video_id: v1.id, user_id: user5.id, username: "StarWarsFan", commentable_id: v1.id, commentable_type: "Video")
c4 = Comment.create!(body: "christian bale is so hot!!!", video_id: v1.id, user_id: user7.id, username: "keyboardManiac", commentable_id: v1.id, commentable_type: "Video")
c5 = Comment.create!(body: "I AM BATMAN", video_id: v1.id, user_id: user4.id, username: "Instant123", commentable_id: v1.id, commentable_type: "Video")

# # Video 2
# c6 = Comment.create!(id: 6, body: "I used to play saxophone in highschool.", video_id: 2, user_id: 6, username: "Anonymous93", commentable_id: 2, commentable_type: "Video")
# c7 = Comment.create!(id: 7, body: "mario kart is such a stupid game", video_id: 2, user_id: 1, username: "demo", commentable_id: 2, commentable_type: "Video")
# c8 = Comment.create!(id: 8, body: "every time i play i always get hit by green shells!!!", video_id: 2, user_id: 8, username: "ijikman", commentable_id: 7, commentable_type: "Comment")
# c9 = Comment.create!(id: 9, body: "yay nintendo woohoo!!", video_id: 2, user_id: 5, username: "StarWarsFan", commentable_id: 7, commentable_type: "Comment")
# c10 = Comment.create!(id: 10, body: "hello from japan", video_id: 2, user_id: 2, username: "DylanWong97", commentable_id: 2, commentable_type: "Video")

# # Video 3
# c11 = Comment.create!(id: 11, body: "A Bug's Life is a 1998 American computer-animated comedy film produced by Pixar Animation Studios for Walt Disney Pictures. It was the second film produced by Pixar.", video_id: 3, user_id: 5, username: "StarWarsFan", commentable_id: 3, commentable_type: "Video")
# c12 = Comment.create!(id: 12, body: "??? what does this trailer have to do with a bug's life", video_id: 3, user_id: 8, username: "ijikman", commentable_id: 11, commentable_type: "Comment")
# c13 = Comment.create!(id: 13, body: "so random lolol", video_id: 3, user_id: 4, username: "Instant123", commentable_id: 11, commentable_type: "Comment")
# c14 = Comment.create!(id: 14, body: "let's just be excited for another chris nolan movie", video_id: 3, user_id: 1, username: "demo", commentable_id: 11, commentable_type: "Comment")

# # Video 4
# c15 = Comment.create!(id: 15, body: "so cute omg", video_id: 4, user_id: 1, username: "demo", commentable_id: 4, commentable_type: "Video")
# c16 = Comment.create!(id: 16, body: "i want a french bulldog!!!", video_id: 4, user_id: 2, username: "DylanWong97", commentable_id: 4, commentable_type: "Video")
# c17 = Comment.create!(id: 17, body: "stop being so mean to him and pet him wtf", video_id: 4, user_id: 3, username: "PantsOnFire", commentable_id: 4, commentable_type: "Video")
# c18 = Comment.create!(id: 18, body: "nice", video_id: 4, user_id: 4, username: "Instant123", commentable_id: 4, commentable_type: "Video")
# c19 = Comment.create!(id: 19, body: "animal abuse omg!!!!", video_id: 4, user_id: 5, username: "StarWarsFan", commentable_id: 4, commentable_type: "Video")

# # Video 5
# c20 = Comment.create!(id: 20, body: "ahahahahahaha", video_id: 5, user_id: 1, username: "demo", commentable_id: 5, commentable_type: "Video")
# c21 = Comment.create!(id: 21, body: "what's so funny? this test was a nightmare", video_id: 5, user_id: 5, username: "StarWarsFan", commentable_id: 20, commentable_type: "Comment")
# c22 = Comment.create!(id: 22, body: "ahahahahahahahah", video_id: 5, user_id: 6, username: "Anonymous93", commentable_id: 20, commentable_type: "Comment")
# c23 = Comment.create!(id: 23, body: "this video isn't funny it's very offensive", video_id: 5, user_id: 7, username: "keyboardManiac", commentable_id: 5, commentable_type: "Video")
# c24 = Comment.create!(id: 24, body: "explain?", video_id: 5, user_id: 8, username: "ijikman", commentable_id: 23, commentable_type: "Comment")

# # Video 6
# c25 = Comment.create!(id: 25, body: "i love you madeon omgggg", video_id: 6, user_id: 1, username: "demo", commentable_id: 6, commentable_type: "Video")
# c26 = Comment.create!(id: 26, body: "best song of all time", video_id: 6, user_id: 3, username: "PantsOnFire", commentable_id: 6, commentable_type: "Video")
# c27 = Comment.create!(id: 27, body: "nice dude wow!!!", video_id: 6, user_id: 5, username: "StarWarsFan", commentable_id: 6, commentable_type: "Video")
# c28 = Comment.create!(id: 28, body: "waaaaaaa eeeeeeee", video_id: 6, user_id: 7, username: "keyboardManiac", commentable_id: 6, commentable_type: "Video")
# c29 = Comment.create!(id: 29, body: "wtf", video_id: 6, user_id: 8, username: "ijikman", commentable_id: 28, commentable_type: "Comment")

# # Video 7
# c30 = Comment.create!(id: 30, body: "this song makes me move!!", video_id: 7, user_id: 4, username: "Instant123", commentable_id: 7, commentable_type: "Video")
# c31 = Comment.create!(id: 31, body: "i think this movie was decent. could have been better", video_id: 7, user_id: 5, username: "StarWarsFan", commentable_id: 7, commentable_type: "Video")
# c32 = Comment.create!(id: 32, body: "this movie was amazing it was like one giant music video omg", video_id: 7, user_id: 7, username: "keyboardManiac", commentable_id: 7, commentable_type: "Video")
# c33 = Comment.create!(id: 33, body: "so beautiful", video_id: 7, user_id: 8, username: "ijikman", commentable_id: 7, commentable_type: "Video")

# # Video 8
# c34 = Comment.create!(id: 34, body: "how could you do this to us!!", video_id: 8, user_id: 2, username: "DylanWong97", commentable_id: 8, commentable_type: "Video")
# c35 = Comment.create!(id: 35, body: "i was going to show my daughter this movie but you tricked me", video_id: 8, user_id: 3, username: "PantsOnFire", commentable_id: 8, commentable_type: "Video")
# c36 = Comment.create!(id: 36, body: "im gonna cry right now :(", video_id: 8, user_id: 4, username: "Instant123", commentable_id: 8, commentable_type: "Video")
# c37 = Comment.create!(id: 37, body: "this is unbelievable i wasted 12 seconds of my life", video_id: 8, user_id: 5, username: "StarWarsFan", commentable_id: 8, commentable_type: "Video")

# # Video 9
# c38 = Comment.create!(id: 38, body: "so true", video_id: 9, user_id: 7, username: "keyboardManiac", commentable_id: 9, commentable_type: "Video")
# c39 = Comment.create!(id: 39, body: "dante is so cool", video_id: 9, user_id: 4, username: "Instant123", commentable_id: 9, commentable_type: "Video")
# c40 = Comment.create!(id: 40, body: "ew ur a weird fanboy", video_id: 9, user_id: 6, username: "Anonymous93", commentable_id: 39, commentable_type: "Comment")
# c41 = Comment.create!(id: 41, body: "da da da dada", video_id: 9, user_id: 5, username: "StarWarsFan", commentable_id: 39, commentable_type: "Comment")
# c42 = Comment.create!(id: 42, body: "I am infinity. I transcend space and time.", video_id: 9, user_id: 3, username: "PantsOnFire", commentable_id: 9, commentable_type: "Video")

# # Video 10
# c43 = Comment.create!(id: 43, body: " Yes.  Sixty-five million three hundred and forty thousand two hundred and eighty five.", video_id: 10, user_id: 8, username: "ijikman", commentable_id: 10, commentable_type: "Video")
# c44 = Comment.create!(id: 44, body: "South Park brought me here", video_id: 10, user_id: 7, username: "keyboardManiac", commentable_id: 10, commentable_type: "Video")
# c45 = Comment.create!(id: 45, body: "Live to win, 'till you die, 'till the light dies in your eyes", video_id: 10, user_id: 6, username: "Anonymous93", commentable_id: 10, commentable_type: "Video")
# c46 = Comment.create!(id: 46, body: "10 years later, this song still kicks ass!", video_id: 10, user_id: 5, username: "StarWarsFan", commentable_id: 10, commentable_type: "Video")
# c47 = Comment.create!(id: 47, body: "10 Hour loop when WoW Classic comes out", video_id: 10, user_id: 4, username: "Instant123", commentable_id: 10, commentable_type: "Video")

# # Video 11
# c48 = Comment.create!(id: 48, body: "michael scott!", video_id: 11, user_id: 7, username: "keyboardManiac", commentable_id: 11, commentable_type: "Video")
# c49 = Comment.create!(id: 49, body: "wow so relatable", video_id: 11, user_id: 2, username: "DylanWong97", commentable_id: 11, commentable_type: "Video")
# c50 = Comment.create!(id: 50, body: "redux is so easy y'all are slacking", video_id: 11, user_id: 4, username: "Instant123", commentable_id: 11, commentable_type: "Video")
# c51 = Comment.create!(id: 51, body: "almost impossible to learn", video_id: 11, user_id: 3, username: "PantsOnFire", commentable_id: 11, commentable_type: "Video")
# c52 = Comment.create!(id: 52, body: "jim and pam", video_id: 11, user_id: 8, username: "ijikman", commentable_id: 51, commentable_type: "Comment")

# # Video 12
# c53 = Comment.create!(id: 53, body: "dylan wong", video_id: 12, user_id: 8, username: "ijikman", commentable_id: 12, commentable_type: "Video")
# c54 = Comment.create!(id: 54, body: "megumin megumin megumin megumin", video_id: 12, user_id: 6, username: "Anonymous93", commentable_id: 12, commentable_type: "Video")
# c55 = Comment.create!(id: 55, body: "konosuba!!!!", video_id: 12, user_id: 7, username: "keyboardManiac", commentable_id: 12, commentable_type: "Video")

# # Video 13
# c56 = Comment.create!(id: 56, body: "how is he driving so fast??", video_id: 13, user_id: 6, username: "Anonymous93", commentable_id: 13, commentable_type: "Video")
# c57 = Comment.create!(id: 57, body: "doo doo doo dooodoododododo", video_id: 13, user_id: 3, username: "PantsOnFire", commentable_id: 13, commentable_type: "Video")
# c58 = Comment.create!(id: 58, body: "stop making weird noises", video_id: 13, user_id: 2, username: "DylanWong97", commentable_id: 57, commentable_type: "Comment")
# c59 = Comment.create!(id: 59, body: "i never get a star when i play mario kart please donate", video_id: 13, user_id: 5, username: "StarWarsFan", commentable_id: 13, commentable_type: "Video")
# c60 = Comment.create!(id: 60, body: "ahhhhhhh", video_id: 13, user_id: 8, username: "ijikman", commentable_id: 59, commentable_type: "Comment")

# # Video 14
# c61 = Comment.create!(id: 61, body: "god this fullstack is taking me forever", video_id: 14, user_id: 8, username: "ijikman", commentable_id: 14, commentable_type: "Video")
# c62 = Comment.create!(id: 62, body: "let's go app academy!!!", video_id: 14, user_id: 1, username: "demo", commentable_id: 14, commentable_type: "Video")
# c63 = Comment.create!(id: 63, body: "javascript is so annoying omgggg", video_id: 14, user_id: 2, username: "DylanWong97", commentable_id: 14, commentable_type: "Video")
# c64 = Comment.create!(id: 64, body: "i like learning about css and html :) ewww webpack", video_id: 14, user_id: 3, username: "PantsOnFire", commentable_id: 14, commentable_type: "Video")

# # Video 15
# c65 = Comment.create!(id: 65, body: "i still have to catch up on the newest season...", video_id: 15, user_id: 1, username: "demo", commentable_id: 15, commentable_type: "Video")
# c66 = Comment.create!(id: 66, body: "ewww you like anime", video_id: 15, user_id: 7, username: "keyboardManiac", commentable_id: 65, commentable_type: "Comment")
# c67 = Comment.create!(id: 67, body: "wow that must have hurt so much!!!", video_id: 15, user_id: 2, username: "DylanWong97", commentable_id: 15, commentable_type: "Video")
# c68 = Comment.create!(id: 68, body: "OH MY GOD ANIME IS REAL!", video_id: 15, user_id: 6, username: "Anonymous93", commentable_id: 15, commentable_type: "Video")
# c69 = Comment.create!(id: 69, body: "this is crazy haha", video_id: 15, user_id: 3, username: "PantsOnFire", commentable_id: 15, commentable_type: "Video")

# # Video 16
# c70 = Comment.create!(id: 70, body: "I WAS YOUR GHOST MURPH", video_id: 16, user_id: 4, username: "Instant123", commentable_id: 16, commentable_type: "Video")
# c71 = Comment.create!(id: 71, body: "those aren't mountains... they're waves", video_id: 16, user_id: 5, username: "StarWarsFan", commentable_id: 16, commentable_type: "Video")
# c72 = Comment.create!(id: 72, body: "i love hans zimmer music omg", video_id: 16, user_id: 1, username: "demo", commentable_id: 16, commentable_type: "Video")
# c73 = Comment.create!(id: 73, body: "MUUUURPH", video_id: 16, user_id: 8, username: "ijikman", commentable_id: 16, commentable_type: "Video")

# # Video 17
# c74 = Comment.create!(id: 74, body: "so true!!! evil laugh", video_id: 17, user_id: 1, username: "demo", commentable_id: 17, commentable_type: "Video")
# c75 = Comment.create!(id: 75, body: "rengar is so cheap", video_id: 17, user_id: 2, username: "DylanWong97", commentable_id: 17, commentable_type: "Video")
# c76 = Comment.create!(id: 76, body: "thats bc u bronze", video_id: 17, user_id: 3, username: "PantsOnFire", commentable_id: 75, commentable_type: "Comment")
# c77 = Comment.create!(id: 77, body: "You want an elo boost?", video_id: 17, user_id: 5, username: "StarWarsFan", commentable_id: 75, commentable_type: "Comment")
# c78 = Comment.create!(id: 78, body: "i miss playing league...", video_id: 17, user_id: 6, username: "Anonymous93", commentable_id: 17, commentable_type: "Video")
# c79 = Comment.create!(id: 79, body: "faker!!", video_id: 17, user_id: 7, username: "keyboardManiac", commentable_id: 17, commentable_type: "Video")

# # Video 18
# c80 = Comment.create!(id: 80, body: "awww so cute", video_id: 18, user_id: 2, username: "DylanWong97", commentable_id: 18, commentable_type: "Video")
# c81 = Comment.create!(id: 81, body: "ahahahaha", video_id: 18, user_id: 4, username: "Instant123", commentable_id: 18, commentable_type: "Video")
# c82 = Comment.create!(id: 82, body: "why'd you post a vid of me?", video_id: 18, user_id: 3, username: "PantsOnFire", commentable_id: 18, commentable_type: "Video")
# c83 = Comment.create!(id: 83, body: "why'd you go 0/16", video_id: 18, user_id: 5, username: "StarWarsFan", commentable_id: 82, commentable_type: "Comment")
# c84 = Comment.create!(id: 84, body: "covid is so scary", video_id: 18, user_id: 7, username: "keyboardManiac", commentable_id: 18, commentable_type: "Video")

# # Video 19
# c85 = Comment.create!(id: 85, body: "teenage mutant ninja turtles!", video_id: 19, user_id: 1, username: "demo", commentable_id: 19, commentable_type: "Video")
# c86 = Comment.create!(id: 86, body: "WHAT AN INCREDIBLE VIDEO", video_id: 19, user_id: 2, username: "DylanWong97", commentable_id: 19, commentable_type: "Video")
# c87 = Comment.create!(id: 87, body: "so insightful i think this video changed my life", video_id: 19, user_id: 7, username: "keyboardManiac", commentable_id: 19, commentable_type: "Video")
# c88 = Comment.create!(id: 88, body: "Debugging is so easy. Do you need help?", video_id: 19, user_id: 6, username: "Anonymous93", commentable_id: 19, commentable_type: "Video")
# c89 = Comment.create!(id: 89, body: "I love computer science", video_id: 19, user_id: 4, username: "Instant123", commentable_id: 19, commentable_type: "Video")

s1 = Subscription.create!(subscriber_id: demo.id, channel_id: user2.id)
s2 = Subscription.create!(subscriber_id: demo.id, channel_id: user3.id)
s3 = Subscription.create!(subscriber_id: demo.id, channel_id: user4.id)
s4 = Subscription.create!(subscriber_id: demo.id, channel_id: user5.id)
s5 = Subscription.create!(subscriber_id: demo.id, channel_id: user6.id)
s6 = Subscription.create!(subscriber_id: demo.id, channel_id: user7.id)
# s7 = Subscription.create!(subscriber_id: demo.id, channel_id: user8.id)

s8 = Subscription.create!(subscriber_id: user2.id, channel_id: user1.id)
s9 = Subscription.create!(subscriber_id: user2.id, channel_id: user3.id)
s10 = Subscription.create!(subscriber_id: user2.id, channel_id: user4.id)
s11 = Subscription.create!(subscriber_id: user2.id, channel_id: user6.id)
s12 = Subscription.create!(subscriber_id: user2.id, channel_id: user7.id)
s13 = Subscription.create!(subscriber_id: user2.id, channel_id: user5.id)

# s14 = Subscription.create!(subscriber_id: user3.id, channel_id: user8.id)
s15 = Subscription.create!(subscriber_id: user3.id, channel_id: user4.id)
s16 = Subscription.create!(subscriber_id: user3.id, channel_id: user2.id)
s17 = Subscription.create!(subscriber_id: user3.id, channel_id: user1.id)
s18 = Subscription.create!(subscriber_id: user3.id, channel_id: user5.id)

s19 = Subscription.create!(subscriber_id: user4.id, channel_id: user7.id)
s20 = Subscription.create!(subscriber_id: user4.id, channel_id: user6.id)
s21 = Subscription.create!(subscriber_id: user4.id, channel_id: user5.id)
s22 = Subscription.create!(subscriber_id: user4.id, channel_id: user1.id)

s23 = Subscription.create!(subscriber_id: user5.id, channel_id: user1.id)
s24 = Subscription.create!(subscriber_id: user5.id, channel_id: user3.id)
s25 = Subscription.create!(subscriber_id: user5.id, channel_id: user7.id)
# s26 = Subscription.create!(subscriber_id: user5.id, channel_id: user8.id)
s27 = Subscription.create!(subscriber_id: user5.id, channel_id: user4.id)
s28 = Subscription.create!(subscriber_id: user5.id, channel_id: user2.id)

s29 = Subscription.create!(subscriber_id: user6.id, channel_id: user2.id)
s30 = Subscription.create!(subscriber_id: user6.id, channel_id: user3.id)
s31 = Subscription.create!(subscriber_id: user6.id, channel_id: user4.id)
s32 = Subscription.create!(subscriber_id: user6.id, channel_id: user1.id)
s33 = Subscription.create!(subscriber_id: user6.id, channel_id: user5.id)

s34 = Subscription.create!(subscriber_id: user7.id, channel_id: user1.id)
s35 = Subscription.create!(subscriber_id: user7.id, channel_id: user2.id)
s36 = Subscription.create!(subscriber_id: user7.id, channel_id: user3.id)
# s37 = Subscription.create!(subscriber_id: user7.id, channel_id: user8.id)
s38 = Subscription.create!(subscriber_id: user7.id, channel_id: user6.id)
s39 = Subscription.create!(subscriber_id: user7.id, channel_id: user5.id)
s40 = Subscription.create!(subscriber_id: user7.id, channel_id: user4.id)

# s41 = Subscription.create!(subscriber_id: user8.id, channel_id: user1.id)
# s42 = Subscription.create!(subscriber_id: user8.id, channel_id: user5.id)
# s43 = Subscription.create!(subscriber_id: user8.id, channel_id: user2.id)

l1 = Like.create!(likable_id: v1.id, likable_type: "Video", user_id: user1.id, value: "like")
l2 = Like.create!(likable_id: v1.id, likable_type: "Video", user_id: user2.id, value: "like")
l3 = Like.create!(likable_id: v1.id, likable_type: "Video", user_id: user4.id, value: "like")
l4 = Like.create!(likable_id: v1.id, likable_type: "Video", user_id: user5.id, value: "like")
l5 = Like.create!(likable_id: v1.id, likable_type: "Video", user_id: user3.id, value: "dislike")

# l6 = Like.create!(likable_id: 2, likable_type: "Video", user_id: 1, value: "like")
# l7 = Like.create!(likable_id: 2, likable_type: "Video", user_id: 2, value: "like")
# l8 = Like.create!(likable_id: 2, likable_type: "Video", user_id: 5, value: "like")
# l9 = Like.create!(likable_id: 2, likable_type: "Video", user_id: 6, value: "dislike")
# l10 = Like.create!(likable_id: 2, likable_type: "Video", user_id: 7, value: "dislike")

# l11 = Like.create!(likable_id: 3, likable_type: "Video", user_id: 2, value: "like")
# l12 = Like.create!(likable_id: 3, likable_type: "Video", user_id: 4, value: "like")
# l13 = Like.create!(likable_id: 3, likable_type: "Video", user_id: 6, value: "like")
# l14 = Like.create!(likable_id: 3, likable_type: "Video", user_id: 7, value: "like")
# l15 = Like.create!(likable_id: 3, likable_type: "Video", user_id: 1, value: "like")
# l16 = Like.create!(likable_id: 3, likable_type: "Video", user_id: 8, value: "dislike")

# l17 = Like.create!(likable_id: 4, likable_type: "Video", user_id: 1, value: "like")
# l18 = Like.create!(likable_id: 4, likable_type: "Video", user_id: 3, value: "like")
# l19 = Like.create!(likable_id: 4, likable_type: "Video", user_id: 2, value: "like")
# l20 = Like.create!(likable_id: 4, likable_type: "Video", user_id: 4, value: "like")
# l21 = Like.create!(likable_id: 4, likable_type: "Video", user_id: 5, value: "dislike")
# l22 = Like.create!(likable_id: 4, likable_type: "Video", user_id: 6, value: "dislike")

# l23 = Like.create!(likable_id: 5, likable_type: "Video", user_id: 1, value: "like")
# l24 = Like.create!(likable_id: 5, likable_type: "Video", user_id: 2, value: "like")
# l25 = Like.create!(likable_id: 5, likable_type: "Video", user_id: 3, value: "like")
# l26 = Like.create!(likable_id: 5, likable_type: "Video", user_id: 4, value: "like")
# l27 = Like.create!(likable_id: 5, likable_type: "Video", user_id: 5, value: "like")
# l28 = Like.create!(likable_id: 5, likable_type: "Video", user_id: 6, value: "dislike")
# l29 = Like.create!(likable_id: 5, likable_type: "Video", user_id: 7, value: "dislike")
# l30 = Like.create!(likable_id: 5, likable_type: "Video", user_id: 8, value: "dislike")

# l31 = Like.create!(likable_id: 6, likable_type: "Video", user_id: 3, value: "like")
# l32 = Like.create!(likable_id: 6, likable_type: "Video", user_id: 2, value: "like")
# l33 = Like.create!(likable_id: 6, likable_type: "Video", user_id: 1, value: "like")
# l34 = Like.create!(likable_id: 6, likable_type: "Video", user_id: 6, value: "like")
# l35 = Like.create!(likable_id: 6, likable_type: "Video", user_id: 8, value: "dislike")

# l36 = Like.create!(likable_id: 7, likable_type: "Video", user_id: 6, value: "like")
# l37 = Like.create!(likable_id: 7, likable_type: "Video", user_id: 7, value: "dislike")

# l38 = Like.create!(likable_id: 8, likable_type: "Video", user_id: 7, value: "like")
# l39 = Like.create!(likable_id: 8, likable_type: "Video", user_id: 6, value: "like")
# l40 = Like.create!(likable_id: 8, likable_type: "Video", user_id: 4, value: "like")
# l41 = Like.create!(likable_id: 8, likable_type: "Video", user_id: 3, value: "dislike")

# l42 = Like.create!(likable_id: 9, likable_type: "Video", user_id: 1, value: "like")
# l43 = Like.create!(likable_id: 9, likable_type: "Video", user_id: 2, value: "dislike")
# l44 = Like.create!(likable_id: 9, likable_type: "Video", user_id: 3, value: "like")
# l45 = Like.create!(likable_id: 9, likable_type: "Video", user_id: 4, value: "like")
# l46 = Like.create!(likable_id: 9, likable_type: "Video", user_id: 5, value: "like")
# l47 = Like.create!(likable_id: 9, likable_type: "Video", user_id: 6, value: "like")
# l48 = Like.create!(likable_id: 9, likable_type: "Video", user_id: 7, value: "like")

# l49 = Like.create!(likable_id: 10, likable_type: "Video", user_id: 1, value: "like")
# l50 = Like.create!(likable_id: 10, likable_type: "Video", user_id: 2, value: "dislike")
# l51 = Like.create!(likable_id: 10, likable_type: "Video", user_id: 3, value: "like")
# l52 = Like.create!(likable_id: 10, likable_type: "Video", user_id: 4, value: "like")
# l53 = Like.create!(likable_id: 10, likable_type: "Video", user_id: 5, value: "like")
# l54 = Like.create!(likable_id: 10, likable_type: "Video", user_id: 6, value: "dislike")

# l55 = Like.create!(likable_id: 11, likable_type: "Video", user_id: 1, value: "like")
# l56 = Like.create!(likable_id: 11, likable_type: "Video", user_id: 3, value: "like")
# l57 = Like.create!(likable_id: 11, likable_type: "Video", user_id: 5, value: "like")
# l58 = Like.create!(likable_id: 11, likable_type: "Video", user_id: 6, value: "like")

# l59 = Like.create!(likable_id: 12, likable_type: "Video", user_id: 2, value: "dislike")
# l60 = Like.create!(likable_id: 12, likable_type: "Video", user_id: 3, value: "dislike")
# l61 = Like.create!(likable_id: 12, likable_type: "Video", user_id: 4, value: "dislike")
# l62 = Like.create!(likable_id: 12, likable_type: "Video", user_id: 5, value: "like")
# l63 = Like.create!(likable_id: 12, likable_type: "Video", user_id: 6, value: "like")
# l64 = Like.create!(likable_id: 12, likable_type: "Video", user_id: 7, value: "like")

# l65 = Like.create!(likable_id: 13, likable_type: "Video", user_id: 1, value: "dislike")
# l66 = Like.create!(likable_id: 13, likable_type: "Video", user_id: 4, value: "dislike")
# l67 = Like.create!(likable_id: 13, likable_type: "Video", user_id: 5, value: "like")
# l68 = Like.create!(likable_id: 13, likable_type: "Video", user_id: 6, value: "like")

# l69 = Like.create!(likable_id: 14, likable_type: "Video", user_id: 3, value: "dislike")
# l70 = Like.create!(likable_id: 14, likable_type: "Video", user_id: 4, value: "like")
# l71 = Like.create!(likable_id: 14, likable_type: "Video", user_id: 5, value: "like")
# l72 = Like.create!(likable_id: 14, likable_type: "Video", user_id: 6, value: "like")
# l73 = Like.create!(likable_id: 14, likable_type: "Video", user_id: 7, value: "like")
# l74 = Like.create!(likable_id: 14, likable_type: "Video", user_id: 8, value: "like")
# l75 = Like.create!(likable_id: 14, likable_type: "Video", user_id: 1, value: "dislike")

# l76 = Like.create!(likable_id: 15, likable_type: "Video", user_id: 4, value: "like")
# l77 = Like.create!(likable_id: 15, likable_type: "Video", user_id: 7, value: "like")

# l78 = Like.create!(likable_id: 16, likable_type: "Video", user_id: 4, value: "like")
# l79 = Like.create!(likable_id: 16, likable_type: "Video", user_id: 5, value: "like")
# l80 = Like.create!(likable_id: 16, likable_type: "Video", user_id: 6, value: "like")

# l81 = Like.create!(likable_id: 17, likable_type: "Video", user_id: 1, value: "like")
# l82 = Like.create!(likable_id: 17, likable_type: "Video", user_id: 4, value: "dislike")
# l83 = Like.create!(likable_id: 17, likable_type: "Video", user_id: 5, value: "dislike")
# l84 = Like.create!(likable_id: 17, likable_type: "Video", user_id: 6, value: "like")
# l85 = Like.create!(likable_id: 17, likable_type: "Video", user_id: 7, value: "like")
# l86 = Like.create!(likable_id: 17, likable_type: "Video", user_id: 8, value: "like")

# l87 = Like.create!(likable_id: 18, likable_type: "Video", user_id: 2, value: "like")
# l88 = Like.create!(likable_id: 18, likable_type: "Video", user_id: 3, value: "like")
# l89 = Like.create!(likable_id: 18, likable_type: "Video", user_id: 6, value: "like")
# l90 = Like.create!(likable_id: 18, likable_type: "Video", user_id: 7, value: "like")
# l91 = Like.create!(likable_id: 18, likable_type: "Video", user_id: 8, value: "dislike")

# l92 = Like.create!(likable_id: 19, likable_type: "Video", user_id: 1, value: "like")
# l93 = Like.create!(likable_id: 19, likable_type: "Video", user_id: 2, value: "like")
# l94 = Like.create!(likable_id: 19, likable_type: "Video", user_id: 3, value: "like")
# l95 = Like.create!(likable_id: 19, likable_type: "Video", user_id: 4, value: "like")
# l96 = Like.create!(likable_id: 19, likable_type: "Video", user_id: 5, value: "like")
# l97 = Like.create!(likable_id: 19, likable_type: "Video", user_id: 6, value: "like")
# l98 = Like.create!(likable_id: 19, likable_type: "Video", user_id: 7, value: "like")
# l99 = Like.create!(likable_id: 19, likable_type: "Video", user_id: 8, value: "dislike")





