import React from "react";
import ReactDOM from "react-dom";
import "index.scss";
import {Provider} from 'react-redux';
import store from './store';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router} from "react-router-dom";
const Main = () => {  
    return (
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    )
}
ReactDOM.render(<Main />,  document.getElementById("root"));