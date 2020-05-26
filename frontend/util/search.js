export const searchVideos = (result) => {
    
    return $.ajax({
        method: "GET",
        url: "/api/results",
        data: { result }
    });
};