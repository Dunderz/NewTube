import { connect } from 'react-redux';
import { createComment } from "../../../actions/comment_actions";
import ReplyForm from './reply_form';

const mapStateToProps = state => {
    return {
        currentUser: state.session.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createComment: comment => dispatch(createComment(comment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReplyForm);