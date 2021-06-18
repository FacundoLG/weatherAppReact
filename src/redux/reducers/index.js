const reducers = (state,action) =>{
    switch (action.type) {
        case 'GET_WEATHER':
            return {
                ...state,
                Data: action.payload
            }    
        default:
            return state
    }
}

export default reducers