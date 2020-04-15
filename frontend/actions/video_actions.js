import { 
    fetchVideo,
    fetchVideos
 } from '../util/video';

export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';

const receiveVideo = video => ({
    type: RECEIVE_VIDEO,
    video
});

const receiveVideos = videos => ({
    type: RECEIVE_VIDEOS,
    videos
});

export const requestVideo = id => dispatch => fetchVideo(id)
    .then(video => dispatch(receiveVideo(video)))

export const requestVideos = () => dispatch => fetchVideos()
    .then(videos => dispatch(receiveVideos(videos)))