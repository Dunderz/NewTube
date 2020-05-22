import { connect } from 'react-redux';
import { login, eraseErrors } from '../../actions/session';
import Login from './login';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    ownProps: ownProps
})
const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
    eraseErrors: () => dispatch(eraseErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);