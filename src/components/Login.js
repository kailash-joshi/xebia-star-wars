import React from 'react';
import './login.scss';
class Login extends React.Component {
    handleUsernameChange = () => {

    }
    handlePasswordChange = () => {
        
    }
    render(){
        return (
            <div className="login-page">
                <div className="form">
                    <div className="login-form">
                        <input type="text" placeholder="username" 
                            onChange={this.handleUsernameChange}
                        />
                        <input type="password" placeholder="password"
                            onChange={this.handlePasswordChange}
                        />
                        <button>login</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;