import {LOGIN, LOGOUT } from '../actions/index';


function changeLoginStatus(state, action) {
    return Object.assign(state, action.data);
}

function loginStatus(state={}, action){
    switch(action.type) {
        case LOGIN:
            return changeLoginStatus(state, action);
        case LOGOUT: 
            return changeLoginStatus(state, action);
        default: 
            return state || {};
    }
}


export default loginStatus;