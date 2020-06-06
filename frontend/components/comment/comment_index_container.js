import { connect } from 'react-redux';
import { requestComments } from '../../actions/comment_actions';
import CommentIndex from './comment_index';
import { withRouter } from 'react-router-dom';
 
 
const mapStateToProps = (state, ownProps) => {
    return {
        comments: state.entities.comments,
        currentUser: state.session.currentUser
    }
}
 
const mapDispatchToProps = dispatch => {
    return {
        requestComments: videoId => dispatch(requestComments(videoId))
    }
}
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentIndex));
