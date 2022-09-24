import { createContext } from "react";

// create context
export const GlobalContext = createContext();

//create provider components
export const GlobalProvider = (props) => {
  return (
    <GlobalContext.Provider value={{ barbaros: "developer" }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
