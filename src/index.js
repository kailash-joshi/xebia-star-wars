import React from "react";
import ReactDOM from "react-dom";
import "index.scss";
import {Provider} from 'react-redux';
import store from './store';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
const Main = () => {  
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}
ReactDOM.render(<Main />,  document.getElementById("root"));