import { connect } from 'react-redux';
import CommentDelete from './comment_delete';
import { deleteComment, requestComments } from '../../actions/comment_actions';
 
const mapStateToProps = state => {
    return {
 
    }
}
 
const mapDispatchToProps = dispatch => {
    return {
        deleteComment: id => dispatch(deleteComment(id)),
        requestComments: videoId => dispatch(requestComments(videoId))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CommentDelete);