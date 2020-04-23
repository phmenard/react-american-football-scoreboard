//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";

let CustomButtons = (props) => {

    let plays = ['Passing', 'Running', 'Trick', 'Flee Flicker', 'Hail Mary', 'Latteral'];

    const hideButton = {
        visibility: 'hidden'
    };

    const showButton = {
        visibility: 'block'
    };

    let [kickButton, setKickButton] = useState(showButton);
    let [midField, setMidField] = useState(false);

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
                
                setKickButton(showButton);
                console.log(kickButton);
                //props.resetTimer();

            }

            }>Change Down</button>


            <button className="homeButtons__fieldGoal" onClick={() => {
                //if (props.down == 4) {
                //props.setDown(1);

                // grab a random # from -30-10
                let yardsGained = Math.floor(Math.random() * 41) - 10;


                // whats left in the play for yards to gain?
                let yardsToGo = props.toGo - yardsGained;
                if (yardsToGo <= 0) {
                    yardsToGo = 10;
                    props.setDown(1);
                } else {
                    props.setDown(props.down + 1);
                }
                props.setToGo(yardsToGo);



                console.log(midField);

                let ballPosition = 0;
                if (!midField) {
                    ballPosition = props.ballOn + yardsGained;
                    if (ballPosition < 50) {
                        setMidField(false);
                    } else {
                        ballPosition = (50 - yardsGained);
                        setMidField(true);
                    }
                    props.setBallOn(ballPosition);

                } else {
                    ballPosition = props.ballOn - yardsGained;
                    props.setBallOn(ballPosition);
                }




                if (ballPosition <= 0) {
                    if (props.possession == 'home') {
                        props.setHomeScore(props.homeScore + 7);
                        props.setPossession('away');
                    } else {
                        props.setAwayScore(props.awayScore + 7);
                        props.setPossession('home');
                    }

                    props.setBallOn(Math.floor(Math.random() * 50) + 1);
                }


                console.log(`You completed a ${plays[Math.floor(Math.random() * plays.length)]} play for ${yardsGained} yards.`);
                //} else {
                //    props.setDown(props.down + 1);
                // }

                //props.resetTimer();

            }

            }>Play a Down</button>

            <button style={kickButton} className="homeButtons__fieldGoal" onClick={() => {


            }

            }>Kick</button>

        </div>
    );
}

export default CustomButtons;