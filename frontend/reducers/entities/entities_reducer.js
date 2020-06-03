import { combineReducers } from 'redux';
import videosReducer from './videos_reducer';
import usersReducer from './users_reducer';
import commentsReducer from './comments_reducer';
import likesReducer from './likes_reducer';
import subscriptionsReducer from './subscriptions_reducer';
import selfSubscriptionsReducer from './self_subscriptions_reducer';
import channelSubscriptionsReducer from './channel_subscriptions_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    videos: videosReducer,
    comments: commentsReducer,
    likes: likesReducer,
    subscriptions: subscriptionsReducer,
    selfSubscriptions: selfSubscriptionsReducer,
    channelSubscriptions: channelSubscriptionsReducer
});

export default entitiesReducer;