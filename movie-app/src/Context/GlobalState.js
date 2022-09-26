import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

// create context
export const GlobalContext = createContext();

const initialState = {
    watchlist : localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
    watched : localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
}

//create provider components
export const GlobalProvider = (props) => {
    const[state,dispatch] = useReducer(AppReducer,initialState);

    useEffect(() => {
      localStorage.setItem("watchlist", JSON.stringify(state.watchlist))
      localStorage.setItem("watched", JSON.stringify(state.watched))
    }, [state])
    

    const addMovieToWatchlist = (result) => {
        dispatch({type : "ADD_MOVİE_TO_WATCHLIST", payload:result})
    }

    const removeMovieToWatchlist = (id) => {
        dispatch({type : "REMOVE_MOVİE_TO_WATCHLIST",payload:id})
    }

    const addMovieToWatched = (movie) => {
        dispatch({type : "ADD_MOVİE_TO_WATCHED" , payload:movie})
    }

    const moveToWatchlist = (movie) => {
      dispatch({type : "MOVE_TO_WATCHED" , payload:movie})
    }

    const removeMovieWatched = (id) => {
      dispatch({type : "REMOVE_MOVIE_TO_WATCHED" , payload:id})
    }


  return (
    <GlobalContext.Provider value={{
      watchlist : state.watchlist,
      watched : state.watched,
      addMovieToWatchlist,
      removeMovieToWatchlist,
      addMovieToWatched,
      moveToWatchlist,
      removeMovieWatched}}>
      {props.children}
    </GlobalContext.Provider>
  );
};
