import { connect } from 'react-redux';
import { uploadVideo } from '../../actions/video_actions';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import VideoUpload from './video_upload';

const mapStateToProps = state => ({
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
    uploadVideo: video => dispatch(uploadVideo(video)),
    closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoUpload));