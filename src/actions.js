import {CHANGE_SEARCHFIELD} from './constants.js'



// when search text box value is modified, create and object with action and payload
export const setSearchField=(text)=>{
    return({
        type:CHANGE_SEARCHFIELD,
        payLoad:text
    });
}