import { fetchUser } from '../util/user';

export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const requestUser = (id) => dispatch => fetchUser(id)
    .then((user) => dispatch(receiveUser(user)));

