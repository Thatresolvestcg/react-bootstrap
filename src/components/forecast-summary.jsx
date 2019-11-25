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


ForecastSummary.propTypes = {
    date: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired
};


export default ForecastSummary;
