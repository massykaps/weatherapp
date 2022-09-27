import React from 'react';
import PropTypes from 'prop-types';

function LocationDetails(props) {
    const { city, country } = props;
    return <h1>{`${city}, ${country}`}</h1>;
};

function App() {
    return (
        <div classname="App">
            <LocationDetails />
        </div>
    );
};



export default LocationDetails;

LocationDetails.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
};