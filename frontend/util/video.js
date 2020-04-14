export const fetchVideo = videoId => (
    $.ajax({
        url: `/api/videos/${videoId}`
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