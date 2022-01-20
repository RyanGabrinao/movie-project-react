import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  favorites: [],
};

const GlobalContext = createContext(initialState);

function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addFave(favorites) {
    dispatch({
      type: "ADD_FAVE",
      payload: favorites,
    });
  }

  function deleteFave() {
    dispatch({
      type: "DELETE_FAVE",
      payload: null,
    });
  }

  return (
    <GlobalContext.Provider
      value={{ favorites: state.favorites, addFave, deleteFave }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProvider };
