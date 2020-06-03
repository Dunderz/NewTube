json.partial! '/api/videos/video', video: @video
json.subscribers @video.user.channel_subscribers

json.current_user_subscriptions current_user.your_subscriptions