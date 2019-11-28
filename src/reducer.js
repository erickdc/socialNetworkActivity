import * as ActionTypes from "./constants";

const initialState = {
  posts: []
};

const appReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.GET_POSTS_SUCCESS: {
      return { ...state, posts: payload.posts };
    }
    default:
      return state;
  }
};

export default appReducer;