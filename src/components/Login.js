import React from 'react';
import './login.scss';
import {connect} from 'react-redux';
import * as actions from '../actions/action';
class Login extends React.Component {
    handleUsernameChange = (e) => {
        this.props.setUsername(e.target.value);
    }
    handlePasswordChange = (e) => {
        this.props.setPassword(e.target.value);
    }
    handleLogin = () => {
        this.props.loginUser();
    }
    render(){
        const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
        return (
            !loggedIn ? <div className="login-page">
                <div className="form">
                    <div className="login-form">
                        <input type="text" placeholder="username" 
                            onChange={this.handleUsernameChange}
                            value={this.props.username}
                        />
                        <input type="password" placeholder="password"
                            onChange={this.handlePasswordChange}
                            value={this.props.password}
                        />
                        <button onClick={this.handleLogin}>login</button>
                    </div>
                </div>
            </div> : null
        )
    }
}
const mapStateToProps = (state) => {
    return {
        username: state.username,
        password: state.password,
        loggedIn: state.loggedIn
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setUsername: (username) => dispatch(actions.setUsername(username)),
        setPassword: (password) => dispatch(actions.setPassword(password)),
        loginUser: () => dispatch(actions.loginUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);