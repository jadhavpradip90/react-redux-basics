import { createStore } from 'redux';

const initialState = {
    result: 1,
    lastValues: [],
    userName: 'Pradip'
};

const reducer = (state = initialState, action) => {
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

const store = createStore(reducer);

store.subscribe(() => {
    console.log("Store updated :: ", store.getState());
})

store.dispatch({
    type: "ADD",
    data: 100
});

store.dispatch({
    type: "ADD",
    data: 50
});

store.dispatch({
    type: "SUBTRACT",
    data: 25
});