import React from 'react';

import classes from './Error.module.css';


const error = (props) => {
    return(
        <div className={classes.ErrorNoticeWrapper}>
            <h1 className={classes.NotFound404}>404</h1>
            <div className={classes.ErrorTextWrapper}>
                <h2 className={classes.NotFoundHeading}>Oops!</h2>
                <p className={classes.NotFoundDetails}>We can't find the zipcode you are looking for.</p>
               
            </div>
        </div>
    );
}

export default error;