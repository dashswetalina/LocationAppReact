import React from 'react';

import classes from './Header.module.css';


const header = (props) => {
    return(
        <header className={classes.Header}>
            {props.data}
        </header>
    ); 
}

export default header;