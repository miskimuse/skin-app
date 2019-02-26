import React from 'react';
import Routine from "../routine/RoutineCreate"


const Splash = (props) => {
    return (
        <div>
            <Routine sessionToken={props.sessionToken}/>
        </div>
    )
}

export default Splash;