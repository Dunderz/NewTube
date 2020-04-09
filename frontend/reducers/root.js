import { combineReducers } from 'redux';
import sessionReducer from './session';
import errorsReducer from './errors/errors_reducer';

export default combineReducers({
    session: sessionReducer,
    errors: errorsReducer
});