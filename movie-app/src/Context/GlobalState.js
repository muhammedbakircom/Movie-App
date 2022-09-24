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
    console.log(state);
  return (
    <GlobalContext.Provider value={{ barbaros: "developer" }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
