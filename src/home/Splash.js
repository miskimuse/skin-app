import React from 'react';
import Routine from "../routine/RoutineCreate"
import APIURL from './helpers/environment';

const Splash = (props) => {
    return (
        <div>
            <Routine sessionToken={props.sessionToken}/>
        </div>
    )
}

export default Splash;