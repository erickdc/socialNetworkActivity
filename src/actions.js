import * as ActionTypes from "./constants";

export function getPostsSuccess(posts) {
  return {
    type: ActionTypes.GET_POSTS_SUCCESS,
    payload: posts
  };
}
