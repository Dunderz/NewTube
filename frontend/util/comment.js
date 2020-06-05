export const fetchComments = id => (
    $.ajax({
        method: 'GET',
        url: `/api/videos/${id}/comments`
    })
);

export const fetchComment = id => (
    $.ajax({
        method: 'GET',
        url: `/api/comments/${id}`
    })
);

export const postComment = comment => (
    $.ajax({
        method: "POST",
        url: "/api/comments",
        data: { comment }
    })
);

export const destroyComment = id => {
    return $.ajax({
        method: "DELETE",
        url: `api/comments/${id}`
    })
}

