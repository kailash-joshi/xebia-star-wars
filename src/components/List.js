import React from 'react';
// import PropTypes from 'prop-types';
import './list.scss';
const List = ({planets}) => {
    const planetList = planets.map((planet)=>{
        return <div key={planet.name}><font size={planet.population}>{planet.name}</font></div>
    })
    return(
        <div className="listItem">{planetList}</div>
    )
}
List.defaultProps = {
    planets: []
}
export default List;
