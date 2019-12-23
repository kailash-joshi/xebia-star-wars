import React from 'react';
import Login from './components/Login';
import Search from './containers/Search';
import Loader from './containers/Loading';
import {Switch, Route} from 'react-router-dom';
const App = () => {
    return(
        <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/login' component={Login} />
            <Route path='/search' component={Search} />
            <Loader />
        </Switch>
    )
}
export default App;