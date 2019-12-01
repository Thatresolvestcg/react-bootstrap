import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';


const ForecastSummary = props => (
    <div>
        <div className="forecast-summary__icon">
            <WeatherIcon name="owm" iconId={props.icon} />
        </div>
        <p>{props.date}</p>
        <p>{props.description}</p>
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
