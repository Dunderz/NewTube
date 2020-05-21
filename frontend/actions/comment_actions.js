import { fetchComments, fetchComment, postComment } from '../util/comment';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
});

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

export const requestComments = id => dispatch => fetchComments(id)
    .then(comments => dispatch(receiveComments(comments)));

export const createComment = newComment => dispatch => postComment(newComment)
    .then(comment => dispatch(receiveComment(comment)));

