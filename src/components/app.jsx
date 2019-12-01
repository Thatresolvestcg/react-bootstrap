import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';

class App extends React.Component {
    render() {
        return (
            <div className='forecast'>
                <LocationDetails
                    city={this.props.location.city}
                    country={this.props.location.country}
                />
                <ForecastSummaries forecasts={this.props.forecasts} />
                <forecastDetails forecast={this.props.forecasts[0]} />

            </div>
        )
    }
}


App.propTypes = {
    location: PropTypes.shape({
        city: PropTypes.string,
        country: PropTypes.string,
    }).isRequired,
    forecasts: PropTypes.array.isRequired,
};

export default App;