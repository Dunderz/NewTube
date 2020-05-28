json.extract! video, :id, :title, :views
json.videoUrl url_for(video.video)
json.thumbnailUrl url_for(video.thumbnail)
json.user video.user