json.partial! '/api/videos/video', video: @video
json.subscribers @video.user.channel_subscribers

if current_user
    json.current_user_subscriptions current_user.your_subscriptions
end