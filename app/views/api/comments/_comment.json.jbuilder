json.extract! comment, :id, :body, :created_at, :video_id, :username, :commentable_type, :commentable_id
json.user comment.user
json.replies comment.comments do |reply|
    json.partial! "api/comments/reply", reply: reply
end