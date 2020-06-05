import { fetchComments, fetchComment, postComment, destroyComment } from '../util/comment';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
});

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

const removeComment = id => ({
    type: REMOVE_COMMENT,
    id
})

export const requestComments = id => dispatch => fetchComments(id)
    .then(comments => dispatch(receiveComments(comments)));

export const createComment = newComment => dispatch => postComment(newComment)
    .then(comment => dispatch(receiveComment(comment)));

export const deleteComment = id => dispatch => destroyComment(id)
    .then(() => dispatch(removeComment(id)));

