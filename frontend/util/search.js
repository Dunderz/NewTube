export const searchVideos = (result) => {
    
    return $.ajax({
        method: "GET",
        url: "/api/search",
        data: { result: result }
    });
};