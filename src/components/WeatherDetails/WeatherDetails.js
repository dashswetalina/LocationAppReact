import React from 'react';

import classes from './WeatherDetails.module.css';
import Temperature from './Temperature/Temperature';
import Description from './Description/Description';
import Name from './Name/Name';
import Coordinates from './Coordinates/Coordinates';

const weatherDetails = (props) => {
    return(
        <div className={classes.WeatherDetailsWrapper}>
            <div className={classes.WeatherDataWrapper}>
                <Temperature degrees={props.data.temperature} />
                <Description type={props.data.description} />
                <Name type={props.data.name} />
                <Coordinates type={props.data.coordinates} />
            </div>
        </div>
    );
}

export default weatherDetails;