import { connect } from 'react-redux';
import { createComment } from "../../actions/comment_actions";
import CommentForm from './comment_form';
import { withRouter } from 'react-router-dom';
const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
        ownProps: ownProps,
        state
    }
}
 
const mapDispatchToProps = dispatch => {
    return {
        createComment: comment => dispatch(createComment(comment))
    }
}
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentForm));
