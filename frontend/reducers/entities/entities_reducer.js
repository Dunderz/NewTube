import { combineReducers } from 'redux';
import videosReducer from './videos_reducer';
import usersReducer from './users_reducer';
import commentsReducer from './comments_reducer';
import likesReducer from './likes_reducer';
import subscriptionsReducer from './subscriptions_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    videos: videosReducer,
    comments: commentsReducer,
    likes: likesReducer,
    subscriptions: subscriptionsReducer
});

export default entitiesReducer;