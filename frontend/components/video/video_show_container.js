import { connect } from 'react-redux';
import { requestVideo, requestVideos } from '../../actions/video_actions'
import VideoShow from './video_show';

const mapStateToProps = (state, ownProps) => {
    return {
        video: state.entities.videos[ownProps.match.params.id],
        videos: Object.values(state.entities.videos)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestVideo: (id) => dispatch(requestVideo(id)),
        requestVideos: () => dispatch(requestVideos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);