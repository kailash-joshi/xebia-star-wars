export const LOGIN = "LOGIN";
export const SET_IS_LOGIN = "SET_IS_LOGIN";
export function login(username, password) {
    return {
        type: LOGIN,
        payload: username
    }
}