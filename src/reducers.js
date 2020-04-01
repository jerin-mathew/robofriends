import { CHANGE_SEARCHFIELD } from './constants.js'

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