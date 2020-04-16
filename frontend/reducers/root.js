import { combineReducers } from 'redux';
import sessionReducer from './session';
import errorsReducer from './errors/errors_reducer';
import entitiesReducer from './entities/entities_reducer';
import usersReducer from './entities/users_reducer';
import uiReducer from './entities/ui_reducer';

export default combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    ui: uiReducer
});