import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js'

// create an initial state
const initialStateSearchField = {
    searchField: ''
}

//get the initial state, do some action and return new state
export const searchRobots = (state = initialStateSearchField, action = {}) => {

    switch (action.type) {
        case CHANGE_SEARCHFIELD:
            return Object.assign({}, state, { searchField: action.payLoad });
        // for this action type assign the state's searchField with payload from action(which is text entered by user)
        default:
            return state
    }
}

const initialStateRobots = {

    robots: [],
    isPending: true,
    error: ''
}

export const requestRobots = (state = initialStateRobots, action = {}) => {

    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({},state,{isPending:true});
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({},state,{robots:action.payLoad,isPending:false});
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({},state,{error:action.payLoad});

        default:
            return state

    }
}