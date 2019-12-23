import {
    SET_USERNAME, 
    SET_PASSWORD,
    SUBMIT_LOGIN,
    ALL_PEOPLES_RECIEVED,
    SET_IS_LOGIN
} from "../actions/action";

let initialState = {
    loading: false,
    username: '',
    password: '',
    loggedIn: false,
    allPeoples: []
}
const reducer = (state = initialState, action) => {
    if(state === 'undefined') {
        return initialState;
    }
    switch(action.type) {
        case SET_USERNAME: {
            return {
                ...state, username: action.payload
            }
        }
        case SET_PASSWORD: {
            return {
                ...state, password: action.payload
            }
        }
        case SUBMIT_LOGIN:
            return { ...state, loading: true };
        case ALL_PEOPLES_RECIEVED:
            return { ...state, allPeoples: action.payload, loading: false }
        case SET_IS_LOGIN:
            return { ...state, loggedIn: action.payload}
    }
    return state;
}
export default reducer;