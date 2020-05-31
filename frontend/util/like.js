export const fetchLikes = video => {
    return $.ajax({
        method: 'GET',
        url: `/api/videos/${video.id}/`
    })
}