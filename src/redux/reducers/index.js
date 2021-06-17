const reducers = (state,action) =>{
    switch (action.type) {
        case 'GET_WEATHER':
            return action.payload    
        default:
            return state
    }
}

export default reducers