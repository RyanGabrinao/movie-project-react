function AppReducer(state, action) {
  switch (action.type) {
    case "ADD_FAVE":
      return {
        ...state,
        favorites: action.payload,
      };
    case "DELETE_FAVE":
      return {
        ...state,
        favorites: null,
      };
    default:
      return state;
  }
}

export default AppReducer;
