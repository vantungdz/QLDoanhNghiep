const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LIST_POST:
      return {
        ...state,
        load: true,
      };
    case GET_LIST_POST_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        posts: data,
        load: false,
      };
    default:
      return state;
  }
};

export default postsReducer;
