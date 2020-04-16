import { connect } from 'react-redux';
import { uploadVideo } from '../../actions/video_actions';
import { closeModal } from '../../actions/modal_actions';
import VideoUpload from './video_upload';

const mapStateToProps = state => ({
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
    uploadVideo: video => dispatch(uploadVideo(video)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoUpload);