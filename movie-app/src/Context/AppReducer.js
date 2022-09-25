const foo = (state,action) => {

    switch(action.type){
        case "ADD_MOVİE_TO_WATCHLIST":
            return{
                ...state,
                watchlist:[...state.watchlist,action.payload]
            };

        case "REMOVE_MOVİE_TO_WATCHLIST":
            return{
                ...state,
                watchlist: state.watchlist.filter(
                    (movie) => movie.id !== action.payload
                    ),
            };
            case "ADD_MOVİE_TO_WATCHED":
                return{
                    ...state,
                    watchlist:state.watchlist.filter((movie) => movie.id !== action.payload.id
                    ),
                    watched:[...state.watched, action.payload],
                };
    default:
        return state;
  }
};

export default foo