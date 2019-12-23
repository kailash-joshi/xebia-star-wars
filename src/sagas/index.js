import "regenerator-runtime/runtime";
import { put, takeLatest, all, select } from 'redux-saga/effects';
import {
    SUBMIT_LOGIN, 
    ALL_PEOPLES_RECIEVED,
    SET_IS_LOGIN,
    ALL_PLANETS_RECIEVED,
    FETCH_PLANETS
} from '../actions/action';

import {createHashHistory} from 'history';
const history = createHashHistory();
function isUserExist(allPeoples=[], creds={}) {
    const user = allPeoples.filter((people)=>{
        return people.name === creds.username && people.birth_year === creds.password
    })
    if(user.length > 0){
        return true;
    }
    return false;
}
const getCredentials = (state) => {
    return {
        username: state.username,
        password: state.password
    }
}
const getSearchStr = (state) => {
    return state.planetStr
}
function* fetchAllPeoples() {
  const json = yield fetch('https://swapi.co/api/people/')
        .then(response => response.json(), );    
  yield put({ type: ALL_PEOPLES_RECIEVED, payload: json.results, });
  const creds = yield select(getCredentials);
  const loggedIn = isUserExist(json.results, creds);
  if(loggedIn) {
    history.push('/search');
    localStorage.setItem("username", JSON.stringify(creds.username));
    localStorage.setItem("loggedIn", JSON.stringify(loggedIn));

  }
  yield put({ type: SET_IS_LOGIN, payload: loggedIn});
}
function* actionWatcherLogin() {
     yield takeLatest(SUBMIT_LOGIN, fetchAllPeoples)
}

function* fetchAllPlanets() {
    const json = yield fetch('https://swapi.co/api/planets/')
          .then(response => response.json(), );    
    yield put({ type: ALL_PLANETS_RECIEVED, payload: json.results, });
  }
  function* actionWatcherSearch() {
       yield takeLatest(FETCH_PLANETS, fetchAllPlanets)
  }

export default function* rootSaga() {
   yield all([
    actionWatcherLogin(),
    actionWatcherSearch()
   ]);
}