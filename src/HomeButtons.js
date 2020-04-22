//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";


const HomeButtons = (props) => {
    return (
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          
          <button className="homeButtons__touchdown" onClick = {()=>{
            props.func(props.score + 7);
          }}>Home Touchdown</button>
          
          <button className="homeButtons__fieldGoal" onClick = {()=>{
            props.func(props.score + 3);}}>Home Field Goal</button>
          </div>
    );
}

export default HomeButtons;