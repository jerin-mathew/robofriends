import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js'



// when search text box value is modified, create and object with action and payload
export const setSearchField = (text) => {
    return ({
        type: CHANGE_SEARCHFIELD,
        payLoad: text
    });
}

//return functions.redux-thunk checks which actions returns functions
//since this is webservice call,syntax is different . dispatch is used to dispatch an action
export const requestRobots = ()=>(dispatch) => {

    dispatch({ type: REQUEST_ROBOTS_PENDING });// first call function to change the state while pending
    fetch("https://jsonplaceholder.typicode.com/users")//make the call and update state
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payLoad: data }))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payLoad: error }))




}