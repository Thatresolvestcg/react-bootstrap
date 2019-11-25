import React from 'react';
import PropTypes from 'prop-types';


const ForecastSummary = props => (
    <div>
        <p>{props.date}</p>
        <p>{props.description}</p>
        <p>{props.icon}</p>
        <p>{props.temperature}</p>
    </div>
);


export default ForecastSummary;
