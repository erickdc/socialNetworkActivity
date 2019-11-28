import * as ActionTypes from "./constants";

export function getPostsSuccess(posts) {
  return {
    type: ActionTypes.GET_POSTS_SUCCESS,
    payload: posts
  };
}

export function getCommentsSuccess(comments) {
  return {
    type: ActionTypes.GET_COMMENTS_SUCCESS,
    payload: comments
  };
}
export function addComment(comment) {
  return {
    type: ActionTypes.CREATE_COMMENT,
    payload: comment
  };
}
