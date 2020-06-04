import { 
    fetchVideo,
    fetchVideos,
    createVideo,
    deleteVideo
 } from '../util/video';

export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const REMOVE_VIDEO = "REMOVE_VIDEO";

const receiveVideo = video => ({
    type: RECEIVE_VIDEO,
    video
});

const receiveVideos = videos => ({
    type: RECEIVE_VIDEOS,
    videos
});

const removeVideo = id => ({
    type: REMOVE_VIDEO,
    id
})

export const requestVideo = id => dispatch => fetchVideo(id)
    .then(video => dispatch(receiveVideo(video)));

export const requestVideos = () => dispatch => fetchVideos()
    .then(videos => dispatch(receiveVideos(videos)));

export const uploadVideo = formData => dispatch => createVideo(formData)
    .then(video => dispatch(receiveVideo(video)));

export const destroyVideo = id => dispatch => deleteVideo(id)
    .then(() => dispatch(removeVideo(id)));