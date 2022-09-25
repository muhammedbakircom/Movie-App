import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// create context
export const GlobalContext = createContext();

const initialState = {
    watchlist : [],
    watched : []
}

//create provider components
export const GlobalProvider = (props) => {
    const[state,dispatch] = useReducer(AppReducer,initialState);

    const addMovieToWatchlist = (result) => {
        dispatch({type : "ADD_MOVİE_TO_WATCHLIST", payload:result})
    }

  return (
    <GlobalContext.Provider value={{
      watchlist : state.watchlist,
      addMovieToWatchlist }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
