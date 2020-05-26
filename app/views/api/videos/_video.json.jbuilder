json.extract! video, :id, :title
json.videoUrl url_for(video.video)
json.thumbnailUrl url_for(video.video.preview(resize_to_limit: [100, 100]))