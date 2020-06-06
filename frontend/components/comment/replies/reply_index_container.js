import { connect } from 'react-redux';
import ReplyIndex from './reply_index';
import { withRouter } from 'react-router-dom';
 
const mapStateToProps = state => {
    return { 
        comments: state.entities.comments
    }
}
 
const mapDispatchToProps = dispatch => {
    return {
 
    }
}
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReplyIndex));