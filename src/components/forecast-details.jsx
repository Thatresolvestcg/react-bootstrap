import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class ForecastDetails extends React.Component {
    render() {
        return <div className="forecastDetails">
            <p className='detailedDate'>{moment(this.props.forecast.date).format('ddd Do MMM')}</p>
            <p className='maxTemp'>Max temp: {this.props.forecast.temperature.max} degrees</p>
            <p className='minTemp'>Min temp: {this.props.forecast.temperature.min} degrees</p>
            <p className='windSpeed'>Wind Speed: {this.props.forecast.wind.speed} mph	</p>
            <p className='windDirection'>Wind Direction: {this.props.forecast.wind.direction}</p>
            <p className='humidity'>Humidity: {this.props.forecast.humidity}</p>
        </div>;
    }
};

ForecastDetails.propTypes = {
    detailedDate: PropTypes.array.isRequired,
    maxTemp: PropTypes.number.isRequired,
    minTemp: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired,
    windDirectionx: PropTypes.number.isRequired,
};

export default ForecastDetails;