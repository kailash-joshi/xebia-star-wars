import React from 'react';
import Login from './components/Login';
import Search from './containers/Search';
import Loader from './containers/Loading';
const App = () => {
    return(
        <>
            <Login />
            <Search />
            <Loader />
        </>
    )
}
export default App;