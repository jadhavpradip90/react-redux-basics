/*import React from "react";
import {render} from "react-dom";

import { User } from './components/User';
import { Main } from './components/Main';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "Max"
        };
    }

    changeUsername(newName) {
        this.setState({
            username: newName
        });
    }

    render() {
        return (
            <div className="container">
                <Main changeUsername={this.changeUsername.bind(this)}/>
                <User username={this.state.username}/>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));*/

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'


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
    combineReducers({mathReducer, userReducer}),
    {},
    applyMiddleware(createLogger())
);

store.subscribe(() => {
    //console.log("Store updated :: ", store.getState());
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

store.dispatch({
    type: "SET_NAME",
    data: 'Ganesh'
});

store.dispatch({
    type: "SET_AGE",
    data: '30'
});