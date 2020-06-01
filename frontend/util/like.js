export const fetchLikes = id => {
    return $.ajax({
        method: 'GET',
        url: `/api/videos/${id}/likes`
    })
}

export const fetchCommentLikes = (videoId, commentId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/videos/${videoId}/likes/${commentId}`
    })
}

export const postLike = like => {
    return $.ajax({
        method: "POST",
        url: "/api/likes",
        data: { like }
    })
}

export const destroyLike = id => {
    return $.ajax({
        method: "DELETE",
        url: `api/likes/${id}`
    })
}