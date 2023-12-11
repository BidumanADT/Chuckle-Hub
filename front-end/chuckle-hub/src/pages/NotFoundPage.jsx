import React from 'react';
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div id='notfound'>
            <h1>This page does not exist.</h1>
            <Link to='/'>Return Home</Link>
        </div>
    );
};

export default NotFound;