import { fetchChannelSubscribers, postSubscription, deleteSubscription } from '../util/subscription';

export const RECEIVE_SUBSCRIPTIONS = "RECEIVE_SUBSCRIPTIONS";
export const RECEIVE_SUBSCRIPTION = "RECEIVE_SUBSCRIPTION";
export const REMOVE_SUBSCRIPTION = "REMOVE_SUBSCRIPTION";

const receiveSubscriptions = subscriptions => ({
    type: RECEIVE_SUBSCRIPTIONS,
    subscriptions
});

const receiveSubscription = subscription => ({
    type: RECEIVE_SUBSCRIPTION,
    subscription
});

const removeSubscription = (id) => ({
    type: REMOVE_SUBSCRIPTION,
    id
});

export const requestChannelSubscribers = id => dispatch => fetchChannelSubscribers(id)
    .then(subscribers => dispatch(receiveSubscriptions(subscribers)))

export const subscribe = (newSub) => dispatch => postSubscription(newSub)
    .then(subscription => dispatch(receiveSubscription(subscription)))

export const unsubscribe = (id) => dispatch => deleteSubscription(id)
    .then(() => dispatch(removeSubscription(id)))