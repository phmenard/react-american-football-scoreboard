//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";

let CustomButtons = (props) => {

    return (

        <div className="homeButtons">

            {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}

            <button className="homeButtons__touchdown" onClick = {()=>{
                if(props.quarter == 4){
                    props.setQuarter(1);
                }else{
                    props.setQuarter(props.quarter + 1);
                }

                //props.resetTimer();
                
            }
            
            }>Change Quarter</button>

            <button className="homeButtons__fieldGoal" onClick = {()=>{
                if(props.down == 4){
                    props.setDown(1);
                }else{
                    props.setDown(props.down + 1);
                }

                //props.resetTimer();
                
            }
            
            }>Change Down</button>


<button className="homeButtons__fieldGoal" onClick = {()=>{
                if(props.down == 4){
                    props.setDown(1);
                }else{
                    props.setDown(props.down + 1);
                }

                //props.resetTimer();
                
            }
            
            }>Play a Down</button>
        </div>
    );
}

export default CustomButtons;