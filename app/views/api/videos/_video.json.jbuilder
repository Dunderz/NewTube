json.extract! video, :id, :title
json.videoUrl url_for(video.video)
json.thumbnailUrl url_for(video.thumbnail)