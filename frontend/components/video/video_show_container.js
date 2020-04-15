import { connect } from 'react-redux';
import { requestVideo } from '../../actions/video_actions'
import VideoShow from './video_show';

const mapStateToProps = (state, ownProps) => {
    return {
        video: state.entities.videos[ownProps.match.params.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestVideo: (id) => dispatch(requestVideo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);