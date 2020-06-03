import { connect } from "react-redux";
import { requestSelfSubscriptions } from '../../actions/subscriber_actions';
import ModalSideBar from './modal_side_bar';

const mapStateToProps = state => {
    return {
        currentUser: state.session.currentUser,
        selfSubscriptions: state.entities.selfSubscriptions,
        state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestSelfSubscriptions: id => dispatch(requestSelfSubscriptions(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalSideBar);