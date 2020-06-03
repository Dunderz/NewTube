json.extract! user, :id, :username, :email, :color, :subscribers, :subscriptions
json.videos do
    @user.videos.each do |video|
        json.set! video.id do
            json.partial! '/api/videos/video', video: video
        end
    end
end

# @subscribers.each do |subscriber|
#     json.set! subscriber.id do
#         json.partial! '/api/subscriptions/subscription', subscription: subscriber
#     end
# end

# json.subscriptions do
#     @user.subscriptions.each do |subscription|
#         json.partial! '/api/subscriptions/subscription', subscription: subscription
#     end
# end
# json.videoCount user.videos.count