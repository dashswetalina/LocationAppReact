import React from 'react';

import classes from './Coordinates.module.css';

const coordinates = (props) => {
    return(
        <div className={classes.CoordinatesWrapper}>
            {props.type}
        </div>
    );
}

export default coordinates;