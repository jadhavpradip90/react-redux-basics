const userReducer = (state = {
    name: 'Pradip',
    age: 35
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.data
            }
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.data,
            }
            break;
    }
    return state;
};

export default userReducer;