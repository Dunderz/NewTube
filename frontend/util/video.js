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

// search bar functionality
// export const fetchVideos = () => {

// }