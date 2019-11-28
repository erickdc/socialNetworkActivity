import * as ActionTypes from "./constants";

const initialState = {
  posts: [],
  comments: []
};

const appReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.GET_POSTS_SUCCESS: {
      return { ...state, posts: payload.posts };
    }
    case ActionTypes.GET_COMMENTS_SUCCESS: {
      return { ...state, comments: payload.comments };
    }
    case ActionTypes.CREATE_COMMENT: {
      return {
        ...state,
        comments: [...state.comments, payload]
      };
    }
    default:
      return state;
  }
};

export default appReducer;
