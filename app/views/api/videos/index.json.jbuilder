json.array! @videos do |video|
    json.extract! video, :id, :title
    json.videoUrl url_for(video.video)
    json.thumbnailUrl url_for(video.video.preview(resize: "210x2>"))
end