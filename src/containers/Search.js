import React from 'react';
import './search.scss';
import {connect} from 'react-redux';
import * as actions from '../actions/action';
import List from '../components/List';
class Search extends React.Component {
    constructor(){
        super();
    }
    componentDidMount() {
        this.props.fetchPlanets();
    }
    handleChange = (e) => {
        this.props.setPlanetSearchString(e.target.value);
    }
    filterPlanets = (planets=[], planetStr='') => {
        const filteredPlanets = [];
        if (planetStr === '') {
            return filteredPlanets;
        } else {
            planets.map((planet)=>{
                if (planet.name.toLowerCase().includes(planetStr) == true) {
                    filteredPlanets.push(planet)
                }
             });
        }
        return filteredPlanets;
    }
    render(){
        const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
        return(
            loggedIn? <div>
                <div id="namer">
                    <div id="namer-input">
                        <input type="text" name="namername" placeholder="Type your search"
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div><List planets={this.filterPlanets(this.props.planets, this.props.planetStr)}/></div>
            </div> : null
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        planets: state.planets,
        planetStr: state.planetStr
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchPlanets: () => dispatch(actions.fetchPlanets()),
        setPlanetSearchString: (planetStr) => dispatch(actions.setPlanetSearchString(planetStr))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);