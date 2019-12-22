import React from 'react';
import './search.scss';
class Search extends React.Component {
    constructor(){
        super();
    }
    handleChange = (e) => {
        
    }
    render(){
        return(
            <div id="namer">
                <div id="namer-input">
                    <input type="text" name="namername" placeholder="Type your name"
                        onChange={(e)=>this.handleChange}
                    />
                </div>
            </div>
        )
    }
}
export default Search;