export const LOGIN_USER = "LOGIN_USER";
export const SET_IS_LOGIN = "SET_IS_LOGIN";
export const SET_USERNAME = "SET_USERNAME";
export const SET_PASSWORD = "SET_PASSWORD";
export const SUBMIT_LOGIN = "SUBMIT_LOGIN";
export const ALL_PEOPLES_RECIEVED = "ALL_PEOPLES_RECIEVED";
export function loginUser() {
    return {
        type: SUBMIT_LOGIN
    }
}

export function setUsername(username){
    return {
        type: SET_USERNAME,
        payload: username
    }
}

export function setPassword(password){
    return {
        type: SET_PASSWORD,
        payload: password
    }
}
