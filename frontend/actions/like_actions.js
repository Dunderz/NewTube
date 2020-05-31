import { fetchLikes, postLike, destroyLike } from '../util/like';

export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveLikes = likes => ({ 
    type: RECEIVE_LIKES,
    likes: likes
});

const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like: like
});

const removeLike = id => ({
    type: REMOVE_LIKE,
    id: id
})

export const requestLikes = id => dispatch => fetchLikes(id)
    .then(likes => dispatch(receiveLikes(likes)));

export const createLike = newLike => dispatch => postLike(newLike)
    .then(like => dispatch(receiveLike(like)));

export const deleteLike = id => dispatch => destroyLike(id)
    .then(like => dispatch(removeLike(id)));