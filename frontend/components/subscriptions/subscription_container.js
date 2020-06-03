import Subscription from './subscription';
import { connect } from 'react-redux';
import { subscribe, unsubscribe } from '../../actions/subscriber_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
    return {
        currentUser: state.session.currentUser,
        state
        
    }
}

const mapDispathToProps = dispatch => {
    return {
        subscribe: newSub => dispatch(subscribe(newSub)),
        unsubscribe: id => dispatch(unsubscribe(id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispathToProps)(Subscription))