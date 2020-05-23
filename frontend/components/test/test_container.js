import { connect } from 'react-redux';
import { requestComments } from '../../actions/comment_actions';
import Test from './test';

const mapStateToProps = state => {
    
}

const mapDispatchToProps = dispatch => {
    return {
        requestComments: videoId => dispatch(requestComments(videoId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);