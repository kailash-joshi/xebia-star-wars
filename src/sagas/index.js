import "regenerator-runtime/runtime";
import { put, takeLatest, all, select } from 'redux-saga/effects';
import {
    SUBMIT_LOGIN, 
    ALL_PEOPLES_RECIEVED,
    SET_IS_LOGIN
} from '../actions/action';

function isUserExist(allPeoples=[], creds={}) {
    const user = allPeoples.filter((people)=>{
        return people.name === creds.username && people.birth_year === creds.password
    })
    if(user.length > 0){
        return true;
    }
    return false;
}
export const getCredentials = (state) => {
    return {
        username: state.username,
        password: state.password
    }
}
function* fetchAllPeoples() {
  const json = yield fetch('https://swapi.co/api/people/')
        .then(response => response.json(), );    
  yield put({ type: ALL_PEOPLES_RECIEVED, payload: json.results, });
  const creds = yield select(getCredentials);
  const loggedIn = isUserExist(json.results, creds);
  yield put({ type: SET_IS_LOGIN, payload: loggedIn});
}
function* actionWatcher() {
     yield takeLatest(SUBMIT_LOGIN, fetchAllPeoples)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}