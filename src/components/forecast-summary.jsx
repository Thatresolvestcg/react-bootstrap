import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';


const ForecastSummary = props => (
    <div>
        <div className="forecast-summary__icon">
            <WeatherIcon name="owm" iconId={props.icon} />
        </div>
        <div className='forecast-summary_date'>
            <span>
                {moment(props.date).format('ddd Do MMM')}
            </span>
        </div>
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
