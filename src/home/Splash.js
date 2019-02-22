import React from 'react';
import SkinLogIndex from '../skinLog/WorkoutIndex';

const Splash = (props) => {
    return (
        <div>
            <SkinLogIndex token={props.sessionToken}/>
        </div>
    )
}

export default Splash;