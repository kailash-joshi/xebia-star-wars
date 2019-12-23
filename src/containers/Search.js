import React from 'react';
import './search.scss';
import {connect} from 'react-redux';
class Search extends React.Component {
    constructor(){
        super();
    }
    handleChange = (e) => {
        
    }
    render(){
        return(
            this.props.loggedIn? <div id="namer">
                <div id="namer-input">
                    <input type="text" name="namername" placeholder="Type your search"
                        onChange={(e)=>this.handleChange}
                    />
                </div>
            </div> : null
        )
    }
}
const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);