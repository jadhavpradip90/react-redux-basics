const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.data,
                lastValues: [...state.lastValues, action.data]
            }
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.data,
                lastValues: [...state.lastValues, action.data]
            }
            break;
    }
    return state;
};
export default mathReducer;