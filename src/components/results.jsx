import React from 'react';


function Results (props) {
    return(
        <div className="results">
            <img src={props.image} alt=""/>
            <div className="info">
    <h2>{props.title}</h2>
    <h3>{props.author}</h3>
    <p>{props.category}</p>
            </div>
        </div>
    )
}

export default Results;