import React, { useState } from "react";


const AwayButtons = (props) => {
    return (
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {()=>{
            props.func(props.score + 7);}}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {()=>{
            props.func(props.score + 3);}}>Away Field Goal</button>
        </div>
    )

}

export default AwayButtons;