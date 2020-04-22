//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";

let CustomButtons = (props) => {

    let plays = ['Passing', 'Running', 'Trick', 'Flee Flicker', 'Hail Mary', 'Latteral'];

    return (

        <div className="homeButtons">

            {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}

            <button className="homeButtons__touchdown" onClick={() => {
                if (props.quarter == 4) {
                    props.setQuarter(1);
                } else {
                    props.setQuarter(props.quarter + 1);
                }

                //props.resetTimer();

            }

            }>Change Quarter</button>

            <button className="homeButtons__fieldGoal" onClick={() => {
                if (props.down == 4) {
                    props.setDown(1);
                } else {
                    props.setDown(props.down + 1);
                }

                //props.resetTimer();

            }

            }>Change Down</button>


            <button className="homeButtons__fieldGoal" onClick={() => {
                //if (props.down == 4) {
                    //props.setDown(1);

                    // grab a random # from -30-10
                    let yardsGained = Math.floor(Math.random()*41) -10;
                    

                    // whats left in the play for yards to gain?
                    let yardsToGo = props.toGo - yardsGained;
                    if(yardsToGo <= 0){
                        yardsToGo = 10;
                        props.setDown(1);
                    }else{
                        props.setDown(props.down + 1);
                    }

                    props.setToGo(yardsToGo);
                    //if(props.ballOn <= 50){
                        props.setBallOn(props.ballOn + yardsGained);
                   // }else{
                      //  props.setBallOn(props.ballOn - yardsGained);
                    //}
                    

                    console.log(`You completed a ${plays[Math.floor(Math.random()*plays.length)]} play for ${yardsGained} yards.`);
                //} else {
                //    props.setDown(props.down + 1);
               // }

                //props.resetTimer();

            }

            }>Play a Down</button>
        </div>
    );
}

export default CustomButtons;