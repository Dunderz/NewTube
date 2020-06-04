export const fetchVideo = id => (
    $.ajax({
        method: 'GET',
        url: `/api/videos/${id}`
    })
);

export const fetchVideos = () => {
    return $.ajax({
        method: 'GET',
        url: "/api/videos"
    })
};

export const createVideo = formData => (
    $.ajax({
        method: 'POST',
        url: 'api/videos',
        data: formData,
        contentType: false,
        processData: false
    })
);

export const deleteVideo = id => {
    return $.ajax({
        method: "DELETE",
        url: `api/videos/${id}`
    })
}

// search bar functionality
// export const fetchVideos = () => {

// }