import React from 'react';
import RoutineIndex from "../routine/RoutineIndex"


const Splash = (props) => {
    return (
        <div className="bgImage">
            <RoutineIndex sessionToken={props.sessionT}/>
        </div>
    )
}

export default Splash;
