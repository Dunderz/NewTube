import { connect } from 'react-redux';
import { createNewUser, eraseErrors } from '../../actions/session';
import SignUp from './signup';

const mapStateToProps = state => ({
    errors: Object.values(state.errors)
})

const mapDispatchToProps = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    eraseErrors: () => dispatch(eraseErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);