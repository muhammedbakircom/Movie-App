const foo = (state,action) => {

    switch(action.type){
        case "ADD_MOVİE_TO_WATCHLIST":
            return{
                ...state,
                watchlist:[...state.watchlist,action.payload]
            };
    default:
        return state;
  }
};

export default foo