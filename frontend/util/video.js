export const fetchVideo = id => (
    $.ajax({
        method: 'GET',
        url: `/api/videos/${id}`
    })
);

export const fetchVideos = (data) => (
    $.ajax({
        method: 'GET',
        url: "/api/videos",
        data
    })
);

export const createVideo = formData => (
    $.ajax({
        method: 'POST',
        url: 'api/videos',
        data: formData,
        contentType: false,
        processData: false
    })
)

// search bar functionality
// export const fetchVideos = () => {

// }