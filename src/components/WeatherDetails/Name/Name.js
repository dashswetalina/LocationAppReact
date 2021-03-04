import React from 'react';

import classes from './Name.module.css';

const name = (props) => {
    return(
        <div className={classes.NameWrapper}>
            {props.type}
        </div>
    );
}

export default name;