import React from "react";
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import App from './container/App';


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

const myLogger = (store) => (next) => (action) => {
    console.log("Logged Action :: ", action);
    next(action);
};

const store = createStore(
    combineReducers({math: mathReducer, user: userReducer}),
    {},
    applyMiddleware(createLogger())
);

store.subscribe(() => {
    //console.log("Store updated :: ", store.getState());
})

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    window.document.getElementById('app')
);